const oracledb = require("oracledb");
const bcrypt = require("bcrypt");
const connectDB = require("../db/connect");

const addStoreData = async (req, res) => {
    let connection;
    const { TRANS_ID, STORE_ID, UOM_NAME, STATUS, CREATED_BY, UPDATED_BY, CO_ID } = req.body;

    try {
        // Establish database connection
        connection = await connectDB();

        // Insert query
        const query = `
            INSERT INTO STORE_DATA (
                TRANS_ID, STORE_ID, UOM_NAME, STATUS, CREATION_DATE, 
                CREATED_BY, UPDATION_DATE, UPDATED_BY, CO_ID
            )
            VALUES (
                :TRANS_ID, :STORE_ID, :UOM_NAME, :STATUS, SYSDATE, 
                :CREATED_BY, SYSDATE, :UPDATED_BY, :CO_ID
            )
        `;

        // Execute the insert query
        const result = await connection.execute(query, {
            TRANS_ID,
            STORE_ID,
            UOM_NAME,
            STATUS,
            CREATED_BY,
            UPDATED_BY,
            CO_ID,
        }, { autoCommit: true });

        // Return success response
        res.status(201).json({
            message: "Store data inserted successfully",
            rowsAffected: result.rowsAffected,
        });
    } catch (err) {
        console.error("Error inserting store data:", err);
        res.status(500).json({ error: "Failed to insert store data", details: err.message });
    } finally {
        // Close connection
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error("Error closing connection:", err);
            }
        }
    }
};

//View Store Data 

const viewStoreData = async (req, res) => {
    let connection;
    const coId=1;

    try {
        // Establish database connection
        connection = await connectDB();

        // Select query
        const query = `
            SELECT 
                TRANS_ID, STORE_ID, UOM_NAME, STATUS, CREATION_DATE, 
                CREATED_BY, UPDATION_DATE, UPDATED_BY, CO_ID
            FROM STORE_DATA
            WHERE CO_ID = :CO_ID
            ORDER BY CREATION_DATE DESC
        `;

        // Execute the select query
        const result = await connection.execute(query, { CO_ID:coId  });
        const stores = result.rows.map((row) => ({
            transId: row[0],
            storeId: row[1],
            uomName: row[2],
            status: row[3],
            creationDate: row[4],
            createdBy: row[5],
            updationDate: row[6],
            updatedBy: row[7],
            coId: row[8],
        }));

        // Return the fetched data
        res.status(200).json({
            message: "Store data fetched successfully",
            stores,
        });
    } catch (err) {
        console.error("Error fetching store data:", err);
        res.status(500).json({ error: "Failed to fetch store data", details: err.message });
    } finally {
        // Close connection
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error("Error closing connection:", err);
            }
        }
    }
};


module.exports = {addStoreData, viewStoreData};
