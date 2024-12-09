const express = require ("express");
const authenticateToken = require("../middleware/auth");
const router = express.Router();
const {userLogin} =require("../controllers/login")



router.route("/login", authenticateToken).post(userLogin);

module.exports=router;