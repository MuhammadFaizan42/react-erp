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
            WHERE ACCT_CODE = '302031000' 
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
const acctCode="302031000100%";

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

// add Customer 
const addCustomer = async (req, res) => {
    const {
        SHORT_CODE,
        NATURE,
        NATURE_DESP,
        CUSTOMER_NAME,
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
        CR_DAYS,
        DISCOUNT,
        VALUE_PKR,
        PER_VAL,
        PROVINCES,
        DIVISION,
        TEHSIL,
        AREA_DIS,
        LEVEL5_ACCT_CODE, // User input
    } = req.body;
    console.log(req.body);

    let connection;

    try {
        // Establish database connection
        connection = await connectDB();
        if (!connection) {
            return res.status(500).json({ error: "Failed to connect to the database." });
        }

        // Validate LEVEL5_ACCT_CODE
        const LEVEL5_CODE = LEVEL5_ACCT_CODE;
        const checkAcctQuery = `
            SELECT ACCT_CODE FROM ACCT_CHART_ACCOUNT_MASTER 
            WHERE ACCT_CODE = :code AND LENGTH(ACCT_CODE) = 13 AND CO_ID = '1'
        `;
        const acctResult = await connection.execute(checkAcctQuery, { code: LEVEL5_CODE });

        if (acctResult.rows.length === 0) {
            return res.status(400).json({ error: "Invalid Level 5 Account Code." });
        }

        // Generate new CUSTOMER_ID
        const customerPattern = `${LEVEL5_CODE}%`;
        const checkCustomerQuery = `
            SELECT CUSTOMER_ID 
            FROM GROUP_CUSTOMER 
            WHERE CUSTOMER_ID LIKE :pattern AND CO_ID = '1'
            ORDER BY CUSTOMER_ID DESC 
            FETCH FIRST 1 ROW ONLY
        `;
        const customerResult = await connection.execute(checkCustomerQuery, { pattern: customerPattern });
        let newCustomerId;
        if (customerResult.rows.length === 0) {
            newCustomerId = `${LEVEL5_CODE}0000`;
        } else {
            const lastCustomerId = customerResult.rows[0][0];
            const numericPart = parseInt(lastCustomerId.slice(-4)); // Last 4 digits
            newCustomerId = `${LEVEL5_CODE}${String(numericPart + 1).padStart(4, "0")}`;
        }
        // Check if new CUSTOMER_ID already exists (edge case)
        const existingCustomerQuery = `
            SELECT CUSTOMER_ID FROM GROUP_CUSTOMER WHERE CUSTOMER_ID = :id AND CO_ID = '1'
        `;
        const existingCustomerResult = await connection.execute(existingCustomerQuery, { id: newCustomerId });

        if (existingCustomerResult.rows.length > 0) {
            throw new Error(`CUSTOMER_ID conflict detected: ${newCustomerId}`);
        }

        // Insert into GROUP_CUSTOMER table
        const insertCustomerQuery = `
            INSERT INTO GROUP_CUSTOMER (
                PK_ID, SHORT_CODE, CUSTOMER_ID, NATURE, NATURE_DESP, CUSTOMER_NAME, CONT_PERSON, 
                CARE_OFF, CATEGORY, SUB_CATEGORY, ADRES, CITY, FACT_NUM, CONT_NUM, OFC_NUM, 
                FAX_NUM, MAIL_ID, NTN_NUM, CR_LIMIT, OPENING_DATE, OPENING_BAL, REMARKS, 
                CREATED_BY, CREATION_DATE, ACT_STATUS, AGING, CR_DAYS, DISCOUNT, VALUE_PKR, 
                PER_VAL, PROVINCES, DIVISION, TEHSIL, AREA_DIS, CO_ID
            ) VALUES (
                CUSTOMER_SEQ.NEXTVAL, :SHORT_CODE, :CUSTOMER_ID, :NATURE, :NATURE_DESP, :CUSTOMER_NAME, :CONT_PERSON, 
                :CARE_OFF, :CATEGORY, :SUB_CATEGORY, :ADRES, :CITY, :FACT_NUM, :CONT_NUM, :OFC_NUM, 
                :FAX_NUM, :MAIL_ID, :NTN_NUM, :CR_LIMIT, TO_DATE(:OPENING_DATE, 'YYYY-MM-DD'), :OPENING_BAL, :REMARKS, 
                :CREATED_BY, SYSDATE, :ACT_STATUS, :AGING, :CR_DAYS, :DISCOUNT, :VALUE_PKR, 
                :PER_VAL, :PROVINCES, :DIVISION, :TEHSIL, :AREA_DIS, :CO_ID
            )
        `;
        await connection.execute(insertCustomerQuery,{
            SHORT_CODE,
            CUSTOMER_ID: newCustomerId,
            NATURE,
            NATURE_DESP,
            CUSTOMER_NAME,
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
            CR_DAYS,
            DISCOUNT,
            VALUE_PKR,
            PER_VAL,
            PROVINCES,
            DIVISION,
            TEHSIL,
            AREA_DIS,
            CO_ID: 1,
        });

        // Insert into ACCT_CHART_ACCOUNT_MASTER table
        const insertChartAcctQuery = `
            INSERT INTO ACCT_CHART_ACCOUNT_MASTER (
                TRANS_ID, ACCT_CODE, LEVEL_NO, SEGMENT, ACCT_TITLE, ACT_GROUP, STATUS, 
                CREATION_DATE, CREATED_BY, M_CLASS, CO_ID, PARENT_ID
            ) VALUES (
                ACCT_SEQ.NEXTVAL, :ACCT_CODE, 6, :SEGMENT, :ACCT_TITLE, 'Transaction', 'Y', 
                SYSDATE, :CREATED_BY, 'CUSTOMER_CLASS', '01', :PARENT_ID
            )
        `;
        await connection.execute(insertChartAcctQuery,{
            ACCT_CODE: newCustomerId,
            SEGMENT: 302, // Assuming SEGMENT for customer
            ACCT_TITLE: CUSTOMER_NAME,
            CREATED_BY,
            PARENT_ID: LEVEL5_CODE,
        });

        // Commit transaction
        await connection.commit();

        // Send success response
        res.status(201).json({
            message: "Customer added successfully",
            CUSTOMER_ID: newCustomerId,
        });
    } catch (err) {
        // Rollback transaction on error
        if (connection) await connection.rollback();
        console.error("Error in addCustomer API:", err);
        res.status(500).json({ error: "Failed to add customer", details: err.message });
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

// view All  Customer 
const getAllCustomers = async (req, res) => {
    let connection;

    try {
        // Establish database connection
        connection = await connectDB();
        if (!connection) {
            return res.status(500).json({ error: "Failed to connect to the database." });
        }

        // Query to fetch all customers
        const query = `
            SELECT 
                PK_ID, SHORT_CODE, CUSTOMER_ID, NATURE, NATURE_DESP, CUSTOMER_NAME, 
                CONT_PERSON, CARE_OFF, CATEGORY, SUB_CATEGORY, ADRES, CITY, FACT_NUM, 
                CONT_NUM, OFC_NUM, FAX_NUM, MAIL_ID, NTN_NUM, CR_LIMIT, OPENING_DATE, 
                OPENING_BAL, REMARKS, CREATED_BY, CREATION_DATE, ACT_STATUS, AGING, 
                CR_DAYS, DISCOUNT, VALUE_PKR, PER_VAL, PROVINCES, DIVISION, TEHSIL, 
                AREA_DIS, CO_ID
            FROM GROUP_CUSTOMER 
            WHERE CO_ID = 1
            ORDER BY CUSTOMER_NAME
        `;
        
        // Execute the query to fetch all customers
        const result = await connection.execute(query);

        // Check if there are customers in the result
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "No customers found." });
        }

        // Send all customer data as response
        res.status(200).json({
            message: "All customers fetched successfully",
            customers: result.rows, // Return all customers
        });
    } catch (err) {
        console.error("Error in getAllCustomers API:", err);
        res.status(500).json({ error: "Failed to fetch all customers", details: err.message });
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




module.exports = {levelFour,levelFive,addCustomer,getAllCustomers};
