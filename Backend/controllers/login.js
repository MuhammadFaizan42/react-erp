require("dotenv").config();
const oracledb = require("oracledb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connectDB = require("../db/connect");


const userLogin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }


let connection;

try {
// Establish the connection
connection = await connectDB();

// Check if connection is valid
if (!connection) {
return res.status(500).json({ error: "Failed to connect to the database." });
}
  // Query to fetch user details
const query = `SELECT LOGIN, PASSWORD, APP_ID, CO_ID,U_ID FROM US_USERS WHERE LOGIN = :username`;

const result = await connection.execute(query, { username });

if (result.rows.length === 0) {
return res.status(401).json({ error: "Invalid username or password." });
}

const dbPassword = result.rows[0][1]; // PASSWORD is the second column in SELECT
const APP_ID = result.rows[0][2];    // APP_ID is the third column in SELECT
const CO_ID = result.rows[0][3];
const user_ID = result.rows[0][4];


const isMatch = await bcrypt.compare(password, dbPassword);
if (!isMatch) {
return res.status(401).json({ error: "Invalid username or password." });
}

// Generate token using secret from .env
const token = jwt.sign(
    { username, APP_ID, CO_ID },
    process.env.JWT_SECRET, // Access the secret key
    { expiresIn: "1h" }
);

 // Set the token in an HTTP-only cookie
res.cookie("auth_token", token, {
    httpOnly: true,      // Prevents client-side JS access to the cookie
    secure: false,       // Set to true in production with HTTPS
    sameSite: "Strict",  // CSRF protection
    maxAge: 3600000,     // Cookie expiry in milliseconds (1 hour)
});

res.cookie("userID", user_ID, { httpOnly: true, maxAge: 3600000 });
res.cookie("coID", CO_ID, { httpOnly: true, maxAge: 3600000 });
res.cookie("appID", APP_ID, { httpOnly: true, maxAge: 3600000 });
// Successful login response
res.status(200).json({ message: "Login successful", user: username, token,  AppID: APP_ID, companyID:CO_ID,UserID:user_ID});

await connection.close(); // Close the connection after operation
}catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Internal server error." });
}

};



module.exports = {userLogin};
