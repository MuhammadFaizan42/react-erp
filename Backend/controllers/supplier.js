const oracledb = require("oracledb");
const bcrypt = require("bcrypt");
const connectDB = require("../db/connect");

// Level 4 dropdown data
const levelFour = async (req, res) => {

let connection;

try {

// Establish the connection
connection = await connectDB();

// Check if connection is valid
if (!connection) {
return res.status(500).json({ error: "Failed to connect to the database." });
}
    const query =`SELECT ACCT_CODE, ACCT_TITLE 
            FROM ACCT_CHART_ACCOUNT_MASTER 
            WHERE ACCT_CODE = '202011000' 
            AND CO_ID = '01'`;

            const result = await connection.execute(query);
    const accountCode = result.rows[0][0]; 
    const accountTitle= result.rows[0][1]; 
    res.status(200).json({Account_code: accountCode, Account_Title:accountTitle});
} catch (err) {
    res.status(500).json({ error: 'Failed to fetch level 4 data' });
}finally {
    if (connection) {
    try {
        await connection.close();
    } catch (err) {
        console.error("Error closing connection:", err);
    }
    }
}
};

// Level 5 dropdown data
const levelFive = async (req, res) => {
const acctCode="202011000100%";

let connection;

try {

// Establish the connection
connection = await connectDB();

// Check if connection is valid
if (!connection) {
return res.status(500).json({ error: "Failed to connect to the database." });
}
    const query =`SELECT ACCT_CODE, ACCT_TITLE 
    FROM ACCT_CHART_ACCOUNT_MASTER 
    WHERE ACCT_CODE LIKE :code 
    AND LENGTH(ACCT_CODE) = 13 
    AND CO_ID = '01'`;

    // Execute query
    const result = await connection.execute(query, { code: acctCode });

    // Check if data exists
    if (result.rows.length === 0) {
    return res.status(404).json({ error: "No records found" });
    }

    // Transform data into an array of objects
    const records = result.rows.map((row) => ({
    Account_Code: row[0],
    Account_Title: row[1],
    }));

    // Send response
    res.status(200).json(records);
} catch (err) {
    res.status(500).json({ error: 'Failed to fetch level 5 data' });
}finally {
    if (connection) {
    try {
        await connection.close();
    } catch (err) {
        console.error("Error closing connection:", err);
    }
    }
}
};

const addSupplier = async (req, res) => {
    const {
    SHORT_CODE,
    NATURE,
    NATURE_DESP,
    SUPPLIER_NAME,
    CONT_PERSON,
    CARE_OFF,
    CATEGORY,
    SUB_CATEGORY,
    ADRES,
    CITY,
    FACT_NUM,
    CONT_NUM,
    OFC_NUM,
    FAX_NUM,
    MAIL_ID,
    NTN_NUM,
    CR_LIMIT,
    OPENING_DATE,
    OPENING_BAL,
    REMARKS,
    CREATED_BY,
    ACT_STATUS,
    AGING,
    LEVEL5_ACCT_CODE, // User input
    } = req.body;

    let connection;

    try {
      // Establish database connection
    connection = await connectDB();
    if (!connection) {
        return res.status(500).json({ error: "Failed to connect to the database." });
    }

      // Start transaction
     // await connection.execute("BEGIN");

      // Validate LEVEL5_ACCT_CODE
    const LEVEL5_CODE =LEVEL5_ACCT_CODE;
    const checkAcctQuery = `
        SELECT ACCT_CODE FROM ACCT_CHART_ACCOUNT_MASTER 
        WHERE ACCT_CODE =:code AND LENGTH(ACCT_CODE) = 13 AND CO_ID='1'
    `;
    const acctResult = await connection.execute(checkAcctQuery, {code:LEVEL5_CODE});

    if (acctResult.rows.length === 0) {
        return res.status(400).json({ error: "Invalid Level 5 Account Code." });
    }
      // Generate new SUPPLIER_ID
// Construct the pattern to be used in the query
const supplierPattern = `${LEVEL5_CODE}%`;  // Concatenate with '%'

    const checkSupplierQuery = `
        SELECT SUPPLIER_ID 
        FROM GROUP_SUPPLIER 
        WHERE SUPPLIER_ID LIKE :pattern AND CO_ID='1'
        ORDER BY SUPPLIER_ID DESC 
        FETCH FIRST 1 ROW ONLY
    `;
    
      // Execute the query with the bind variable
    const supplierResult = await connection.execute(checkSupplierQuery, { pattern: supplierPattern });
    
      // Log the result for debugging purposes
    console.log(supplierResult.rows);

    let newSupplierId;
    if (supplierResult.rows.length === 0) {
        // If no existing SUPPLIER_ID, generate the first ID
        newSupplierId = `${LEVEL5_CODE}0000`;
    } else {
        // If existing SUPPLIER_ID found, increment by 1
        const lastSupplierId = supplierResult.rows[0][0];
        const numericPart = parseInt(lastSupplierId.slice(-4)); // Last 4 digits
        newSupplierId = `${LEVEL5_CODE}${String(numericPart + 1).padStart(4, "0")}`;
    }
    console.log(newSupplierId);

      // Check if new SUPPLIER_ID already exists (edge case)
    const existingSupplierQuery = `
        SELECT SUPPLIER_ID FROM GROUP_SUPPLIER  WHERE SUPPLIER_ID = :id AND CO_ID='1'
    `;
    const existingSupplierResult = await connection.execute(existingSupplierQuery, { id: newSupplierId });

    if (existingSupplierResult.rows.length > 0) {
        throw new Error(`SUPPLIER_ID conflict detected: ${newSupplierId}`);
    }

      // Insert into SUPPLIER_MASTER table
    const insertSupplierQuery = `
        INSERT INTO GROUP_SUPPLIER (
        PK_ID, SHORT_CODE, SUPPLIER_ID, NATURE, NATURE_DESP, SUPPLIER_NAME, CONT_PERSON, 
        CARE_OFF, CATEGORY, SUB_CATEGORY, ADRES, CITY, FACT_NUM, CONT_NUM, OFC_NUM, 
        FAX_NUM, MAIL_ID, NTN_NUM, CR_LIMIT, OPENING_DATE, OPENING_BAL, REMARKS, 
        CREATED_BY, CREATION_DATE, ACT_STATUS, AGING,CO_ID
        ) VALUES (
        SUPPLIER_SEQ.NEXTVAL, :SHORT_CODE, :SUPPLIER_ID, :NATURE, :NATURE_DESP, :SUPPLIER_NAME, :CONT_PERSON, 
        :CARE_OFF, :CATEGORY, :SUB_CATEGORY, :ADRES, :CITY, :FACT_NUM, :CONT_NUM, :OFC_NUM, 
        :FAX_NUM, :MAIL_ID, :NTN_NUM, :CR_LIMIT, TO_DATE(:OPENING_DATE, 'YYYY-MM-DD'), :OPENING_BAL, :REMARKS, 
        :CREATED_BY, SYSDATE, :ACT_STATUS, :AGING  , :CO_ID
        )
    `;
    await connection.execute(insertSupplierQuery, {
        SHORT_CODE,
        SUPPLIER_ID: newSupplierId,
        NATURE,
        NATURE_DESP,
        SUPPLIER_NAME,
        CONT_PERSON,
        CARE_OFF,
        CATEGORY,
        SUB_CATEGORY,
        ADRES,
        CITY,
        FACT_NUM,
        CONT_NUM,
        OFC_NUM,
        FAX_NUM,
        MAIL_ID,
        NTN_NUM,
        CR_LIMIT,
        OPENING_DATE,
        OPENING_BAL,
        REMARKS,
        CREATED_BY,
        ACT_STATUS,
        AGING,
        CO_ID:1
    });

      // Insert into ACCT_CHART_ACCOUNT_MASTER table
    const insertChartAcctQuery = `
        INSERT INTO ACCT_CHART_ACCOUNT_MASTER (
        TRANS_ID, ACCT_CODE, LEVEL_NO, SEGMENT, ACCT_TITLE, ACT_GROUP, STATUS, 
        CREATION_DATE, CREATED_BY, M_CLASS, CO_ID, PARENT_ID
        ) VALUES (
        ACCT_SEQ.NEXTVAL, :ACCT_CODE, 6, :SEGMENT, :ACCT_TITLE, 'Transaction', 'Y', 
        SYSDATE, :CREATED_BY, 'SUPPLIER_CLASS', '01', :PARENT_ID
        )
    `;
    await connection.execute(insertChartAcctQuery, {
        ACCT_CODE: newSupplierId,
        SEGMENT: 202,
        ACCT_TITLE: SUPPLIER_NAME,
        CREATED_BY,
        PARENT_ID:LEVEL5_CODE,
    });

      // Commit transaction
    await connection.commit();

      // Send success response
    res.status(201).json({
        message: "Supplier added successfully",
        SUPPLIER_ID: newSupplierId,
    });
    } catch (err) {
      // Rollback transaction on error
    if (connection) await connection.rollback();
    console.error("Error in addSupplier API:", err);
    res.status(500).json({ error: "Failed to add supplier", details: err.message });
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


module.exports = {levelFour,levelFive,addSupplier};
