const oracledb = require("oracledb");
const bcrypt = require("bcrypt");
const connectDB = require("../db/connect");


const userRegistration = async (req, res) => {
    const { U_ID, U_EID, LOGIN, PASSWORD, APP_ID, CO_ID, SC_FLG } = req.body;

    if (!U_ID || !U_EID || !LOGIN || !PASSWORD || !APP_ID || !CO_ID) {
    return res.status(400).json({ message: 'All fields are required.' });
    }


let connection;

try {
    // Establish the connection
    connection = await connectDB();

    // Check if connection is valid
    if (!connection) {
    return res
        .status(500)
        .json({ error: "Failed to connect to the database." });
    }

    let HPASSWORD= await bcrypt.hash(PASSWORD, 10);

    const insertQuery = `
    INSERT INTO us_users (U_ID, U_EID, LOGIN, PASSWORD, APP_ID, CO_ID, SC_FLG)
    VALUES (:U_ID, :U_EID, :LOGIN, :PASSWORD, :APP_ID, :CO_ID, :SC_FLG)`;

  // Execute the query
await connection.execute(insertQuery, {
    U_ID,
    U_EID,
    LOGIN,
    PASSWORD: HPASSWORD,
    APP_ID,
    CO_ID,
    SC_FLG,
}, { autoCommit: true });

res.status(201).json({ message: 'Data inserted successfully.' });
} catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "An error occurred while fetching data." });
} finally {
    if (connection) {
    try {
        await connection.close();
    } catch (err) {
        console.error("Error closing connection:", err);
    }
    }
}
};



module.exports = {userRegistration};
