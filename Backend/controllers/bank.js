const oracledb = require("oracledb");
const bcrypt = require("bcrypt");
const connectDB = require("../db/connect");

const addBank = async (req, res) => {
    const {
    bank_code,
    bank_name,
    address,
    city,
    short_code,
    status,
    co_id,
    created_by,
    type_id,
    } = req.body;

    if (!bank_code || !bank_name || !address || !city || !short_code || !status || !co_id || !created_by || !type_id) {
    return res.status(400).json({ error: 'Missing required fields' });
    }

    let connection;

    try {
        connection=await connectDB();

      const parentAccountCode = '03020410011000'; // Base 5th-level ACCOUNT_CODE
    const currentDate = new Date();

      // Step 1: Get the highest ACCOUNT_CODE for the 5th level
    const result = await connection.execute(
    `SELECT MAX(ACCOUNT_CODE) AS MAX_ACCOUNT_CODE 
    FROM BANK_DETAIL 
    WHERE ACCOUNT_CODE LIKE :parentAccountCode || '%'`,
    {
        parentAccountCode: parentAccountCode
    }
    );
    console.log(result.rows[0]);

    let maxAccountCode = result.rows && result.rows.length > 0 ? result.rows[0][0] : null;
    console.log('MAX_ACCOUNT_CODE:', maxAccountCode);
    let newAccountCode;

    if (maxAccountCode) {
        // Increment the last 4 digits
        const lastSegment = parseInt(maxAccountCode.slice(-4)) + 1;
        newAccountCode = `${parentAccountCode}${String(lastSegment).padStart(4, '0')}`;
    } else {
        // First Bank for this ACCOUNT_CODE
        newAccountCode = `${parentAccountCode}1000`;
    }
console.log(newAccountCode);
      // Step 2: Check if ACCOUNT_CODE already exists in BANK_DETAIL
    const existingBankCheck = await connection.execute(
        `SELECT COUNT(*) AS COUNT FROM BANK_DETAIL WHERE ACCOUNT_CODE = :newAccountCode`,
        [newAccountCode]
    );

    if (existingBankCheck.rows[0][0] > 0) {
        throw new Error('ACCOUNT_CODE already assigned to another bank');
    }

      // Step 3: Insert into BANK_DETAIL
    await connection.execute(
        `INSERT INTO BANK_DETAIL 
        (TRNAS_ID, BANK_CODE, BANK_NAME, ADRESS, CITY, SHORT_CODE, STATUS, CO_ID, CREATION_DATE, CREATED_BY, ACCOUNT_CODE, SHORT_ID, TYPE_ID) 
        VALUES (BANK_DETAIL_SEQ.NEXTVAL, :bank_code, :bank_name, :address, :city, :short_code, :status, :co_id, :creation_date, :created_by, :account_code, :short_id, :type_id)`,
        {
        bank_code,
        bank_name,
        address,
        city,
        short_code,
        status,
        co_id,
        creation_date: currentDate,
        created_by,
        account_code: newAccountCode,
        short_id: 1, // Assign as needed
        type_id,
        }
    );

      // Step 4: Check if ACCOUNT_CODE already exists in ACCT_CHART_ACCOUNT_MASTER
    const existingAccountCheck = await connection.execute(
        `SELECT COUNT(*) AS COUNT FROM ACCT_CHART_ACCOUNT_MASTER WHERE ACCT_CODE = :newAccountCode`,
        [newAccountCode]
    );
    if (existingAccountCheck.rows[0][0] > 0) {
        throw new Error('ACCOUNT_CODE already exists in ACCT_CHART_ACCOUNT_MASTER');
    }

      // Step 5: Insert into ACCT_CHART_ACCOUNT_MASTER
    await connection.execute(
        `INSERT INTO ACCT_CHART_ACCOUNT_MASTER (TRANS_ID, ACCT_CODE, LEVEL_NO, SEGMENT, ACCT_TITLE, ACT_GROUP, STATUS, CREATION_DATE, CREATED_BY, CO_ID) 
        VALUES 
        (ACCT_SEQ.NEXTVAL, :acct_code, :level_no, :segment, :acct_title, :act_group, :status, :creation_date, :created_by, :co_id)`,
        {
        acct_code: newAccountCode,
        level_no: 6, // 5th level
        segment: 302, // Assign as needed
        acct_title: bank_name,
        act_group: 'Transaction', // Group name
        status,
        creation_date: currentDate,
        created_by:4002,
        co_id,
        }
    );

      // Commit the transaction
    await connection.commit();

    res.status(201).json({
        message: 'Bank added successfully',
        account_code: newAccountCode,
    });
    } catch (error) {
      // Rollback the transaction in case of any error
    if (connection) {
        await connection.rollback();
    }

    console.error(error);
    res.status(500).json({ error: 'Failed to add bank details', details: error.message });
    } finally {
    if (connection) {
        await connection.close();
    }
    }
};

//View Bank Data 

const viewBank = async (req, res) => {
let connection;

try {
    // Establish database connection
    connection=await connectDB();

    // Query to fetch all bank details
    const query = 'SELECT * FROM BANK_DETAIL WHERE CO_ID=13';
    const result = await connection.execute(query, [], {
      outFormat: oracledb.OUT_FORMAT_OBJECT, // Return rows as objects
    });

    // Check if results exist
    if (result.rows.length === 0) {
    return res.status(404).json({ message: 'No bank details found.' });
    }

    // Send response
    res.json({
    message: 'All bank details retrieved successfully.',
    data: result.rows,
    });
} catch (error) {
    console.error('Error retrieving bank details:', error);
    res.status(500).json({ message: 'Internal server error.', error: error.message });
} finally {
    // Close the database connection
    if (connection) {
    try {
        await connection.close();
    } catch (closeError) {
        console.error('Error closing the connection:', closeError);
    }
    }
}
};


module.exports = {addBank,viewBank};
