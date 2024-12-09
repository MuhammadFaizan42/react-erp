const express = require ("express");
const router = express.Router();
const {userRegistration} =require("../controllers/userRegistration");



router.route("/userReg").post(userRegistration);

module.exports=router;