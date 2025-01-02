const oracledb = require("oracledb");
const bcrypt = require("bcrypt");
const connectDB = require("../db/connect");

const addUom = async (req, res) => {
    const { co_id, uom_name, status, created_by } = req.body;

    if (!co_id || !uom_name || !status || !created_by) {
    return res.status(400).json({ error: 'Missing required fields' });
    }

    let connection;
    try {
       // Establish database connection
    connection = await connectDB();


    // Step 1: Check if UOM_NAME already exists for the given CO_ID
    const existingCheck = await connection.execute(
        `SELECT COUNT(*) AS COUNT FROM UNIT_OF_MEASUREMENT 
        WHERE UOM_NAME = :uom_name AND CO_ID = :co_id`,
        { uom_name, co_id }
    );

    const isExisting = existingCheck.rows[0][0] > 0;
    if (isExisting) {
        return res.status(400).json({ error: 'Unit of Measurement already exists for this company' });
    }

      // Step 1: Get max UOM_ID for the given CO_ID
    const result = await connection.execute(
        `SELECT NVL(MAX(UOM_ID), 0) AS MAX_UOM_ID FROM UNIT_OF_MEASUREMENT WHERE CO_ID = :co_id`,
        [co_id]
    );

    const maxUomId = Number(result.rows[0][0]) || 0;
    const newUomId = maxUomId + 1;

      // Step 2: Insert new record
    const currentDate = new Date();
    await connection.execute(
        `INSERT INTO UNIT_OF_MEASUREMENT 
        (TRANS_ID, UOM_ID, UOM_NAME, STATUS, CREATION_DATE, CREATED_BY, CO_ID) 
        VALUES (SEQ_TRANS_ID.NEXTVAL, :uom_id, :uom_name, :status, :creation_date, :created_by, :co_id)`,
        {
        uom_id: newUomId,
        uom_name,
        status,
        creation_date: currentDate,
        created_by,
        co_id,
        },
        { autoCommit: true }
    );

    res.status(201).json({ message: 'Unit of Measurement added successfully', uom_id: newUomId });
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add Unit of Measurement' });
    } finally {
    if (connection) {
        await connection.close();
    }
    }
};

//View Store Data 

const viewUom = async (req, res) => {
    const { co_id } = req.body;

    let connection;
    try {
        connection = await connectDB();

    const result = await connection.execute(
        `SELECT UOM_ID, UOM_NAME, STATUS, CREATION_DATE, CREATED_BY 
        FROM UNIT_OF_MEASUREMENT WHERE CO_ID = :co_id ORDER BY UOM_ID`,
        [co_id]
    );

    const units = result.rows.map(row => ({
        uom_id: row[0],
        uom_name: row[1],
        status: row[2],
        creation_date: row[3],
        created_by: row[4],
    }));

    res.status(200).json({ units });
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Units of Measurement' });
    } finally {
    if (connection) {
    await connection.close();
    }
    }
};


module.exports = {addUom,viewUom};
