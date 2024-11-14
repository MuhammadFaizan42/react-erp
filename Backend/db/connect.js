const oracledb = require("oracledb");
const dbConfig = require("./dbconfig");


const connectDB = async  ()=>{

        
        
        try {
            // Establish connection
            const connection = await oracledb.getConnection({
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString,
            });
        
            console.log("Connection to Oracle Autonomous Database successful!");
            return connection;
        } catch (err) {
            console.error("Error connecting to Oracle DB", err);
        }


};

module.exports =connectDB;