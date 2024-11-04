// app.js

const oracledb = require("oracledb");
const dbConfig = require("./dbconfig");

async function run() {
let connection;

try {
    // Establish connection
connection = await oracledb.getConnection({
    user: dbConfig.user,
    password: dbConfig.password,
    connectString: dbConfig.connectString,
    });

    console.log("Connection to Oracle Autonomous Database successful!");

    // Execute a sample query
    const result = await connection.execute(`INSERT INTO STUDENTS (STUDENTID, LASTNAME, FIRSTNAME, ADDRESS, CITY)
VALUES 
    (5, 'Faizan', 'Muhammad', '456 Oak Ave', 'PAK')`);
    await connection.commit();
    console.log(result);
} catch (err) {
    console.error("Error connecting to Oracle DB", err);
} finally {
    if (connection) {
    try {
        await connection.close();
    } catch (err) {
        console.error("Error closing connection", err);
    }
    }
}
}

run();
