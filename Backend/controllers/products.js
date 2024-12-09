const oracledb = require("oracledb");
const connectDB = require("../db/connect");

const getAllProducts = async (req, res) => {
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

    // Execute the query
    const result = await connection.execute(`SELECT * FROM GROUP_SUPPLIER`, [], {
    outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    // Log and send data in JSON format
    console.log(result.rows);
    res.status(200).json(result.rows);
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

const getAllProductsTesting = async (req, res) => {
res.status(200).json({ msg: "I am getAll Products Testing" });
};

module.exports = { getAllProducts, getAllProductsTesting };
