const oracledb = require("oracledb");
const bcrypt = require("bcrypt");
const connectDB = require("../db/connect");


// Utility function to format dates to DD-MON-RR
function formatDateToDDMONRR(dateString) {
    const date = new Date(dateString);
    
    // Ensure the month is in 3-letter format (e.g., JAN, FEB, MAR)
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = monthNames[date.getMonth()];
    
    // Ensure day is 2 digits
    const day = String(date.getDate()).padStart(2, '0');
    
    // Get the last 2 digits of the year
    const year = String(date.getFullYear()).slice(-2);

    return `${day}-${month}-${year}`;
}

const addFiscalYear = async (req, res) => {
    const { co_id, fiscal_year_name, from_date, to_date, created_by } = req.body;

    let connection;

    try {
        connection = await connectDB();

        // Check if the fiscal year already exists for the given CO_ID
        const checkResult = await connection.execute(
            `SELECT COUNT(*) AS COUNT 
            FROM PROVINCE_DATA 
            WHERE CO_ID = :co_id AND UOM_NAME = :fiscal_year_name`,
            { co_id, fiscal_year_name }
        );

        const exists = parseInt(checkResult.rows[0]?.COUNT, 10) > 0;

        if (exists) {
            return res.status(400).json({ error: 'Fiscal Year already exists.' });
        }

         // Fetch the maximum ORNCE_ID for the given CO_ID
        const result = await connection.execute(
            `SELECT NVL(MAX(ORNCE_ID), 0) + 1 AS NEXT_ORNCE_ID
            FROM PROVINCE_DATA 
            WHERE CO_ID = :co_id`, 
            { co_id }
        );
        const nextOrnceId = result.rows[0][0];
        
        console.log("Next ORNCE_ID:", nextOrnceId);  // Log nextOrnceId value

        if (!nextOrnceId) {
            return res.status(400).json({ error: 'Unable to fetch next ORNCE_ID' });
        }

        // Log the dates to check the format
        const cleanDate = (dateStr) => dateStr.trim().replace(/\s+/g, ''); 
        const cleanedFromDate = cleanDate(from_date);
        const cleanedToDate = cleanDate(to_date);
        console.log("From Date:", from_date);
        console.log("To Date:", to_date);

        console.log("Executing SQL query:", `
            INSERT INTO PROVINCE_DATA (
                TRANS_ID, ORNCE_ID, UOM_NAME, STATUS, CREATION_DATE, CREATED_BY, 
                CO_ID, TYPE_ID, F_DATE, T_DATE, YR, UNIT_NO
            ) 
            VALUES (
                SEQ_TRANS_ID.NEXTVAL, '${nextOrnceId}', '${fiscal_year_name}', 'N', SYSDATE, '${created_by}', 
                '${co_id}', 15, TO_DATE('${cleanedFromDate}', 'DD-MON-YYYY'), TO_DATE('${cleanedToDate}', 'DD-MON-YYYY'), '${fiscal_year_name}', 1
            )`);

        // Insert the fiscal year
        await connection.execute(
            `INSERT INTO PROVINCE_DATA (
                TRANS_ID, ORNCE_ID, UOM_NAME, STATUS, CREATION_DATE, CREATED_BY, 
                CO_ID, TYPE_ID, F_DATE, T_DATE,UNIT_NO
            ) 
            VALUES (
                SEQ_TRANS_ID.NEXTVAL, :ornce_id, :uom_name, 'N', SYSDATE, :created_by, 
                :co_id, 15, :from_date, :to_date,1
            )`,
            {
                ornce_id: nextOrnceId,
                uom_name: fiscal_year_name,
                created_by,
                co_id,
                from_date: cleanedFromDate,  // Use the cleaned date
                to_date: cleanedToDate,      // Use the cleaned date
            },
            
            { autoCommit: true }
        );

        res.status(201).json({ message: 'Fiscal Year added successfully!' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add fiscal year' });
    } finally {
        if (connection) {
            await connection.close();
        }
    }
};





//View Fiscal Year 

const viewFiscalYears = async (req, res) => {
const { co_id } = req.body;

let connection;

try {
    // Establish database connection
    connection=await connectDB();

    // Query to fetch fiscal years for the given CO_ID
    const query = `SELECT ORNCE_ID, UOM_NAME, STATUS, F_DATE, T_DATE 
        FROM PROVINCE_DATA 
        WHERE CO_ID = '${co_id}' AND TYPE_ID=15
        ORDER BY ORNCE_ID`
    const result = await connection.execute(query, [], {
        outFormat: oracledb.OUT_FORMAT_OBJECT, // Return rows as objects
        });
    console.log("Query result:", result.rows);

    res.status(200).json({ fiscalYears: result.rows });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve fiscal years' });
}finally {
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

const updateFiscalYearStatus = async (req, res) => {
    const { co_id, ornce_id, status, updated_by } = req.body;
    let connection;

    try {
    // Establish database connection
    connection=await connectDB();

        if (status === 'Y') {
            // Set all other fiscal years to inactive
            await connection.execute(
                `UPDATE YOUR_TABLE_NAME
                SET STATUS = 'N', UPDATION_DATE = SYSDATE, UPDATED_BY = :updated_by
                WHERE CO_ID = :co_id AND STATUS = 'Y'`,
                { updated_by, co_id },
                { autoCommit: false }
            );
        }

        // Update the status of the specific fiscal year
        await connection.execute(
            `UPDATE YOUR_TABLE_NAME
            SET STATUS = :status, UPDATION_DATE = SYSDATE, UPDATED_BY = :updated_by
            WHERE CO_ID = :co_id AND ORNCE_ID = :ornce_id`,
            { status, updated_by, co_id, ornce_id },
            { autoCommit: true }
        );

        res.status(200).json({ message: 'Fiscal year status updated successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update fiscal year status' });
    }
};



module.exports = {addFiscalYear,viewFiscalYears,updateFiscalYearStatus};
