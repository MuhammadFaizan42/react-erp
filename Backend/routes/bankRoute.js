const express = require ("express");
const router = express.Router();
const {addBank,viewBank} =require("../controllers/bank");


router.route("/addBank").post(addBank);
router.route("/viewBank").get(viewBank);

module.exports=router;