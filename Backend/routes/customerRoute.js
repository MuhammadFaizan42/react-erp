const express = require ("express");
const router = express.Router();
const {levelFour, levelFive,addCustomer,getAllCustomers} =require("../controllers/customer");


router.route("/levelFour").get(levelFour);
router.route("/levelFive").get(levelFive);
router.route("/addCustomer").post(addCustomer);
router.route("/viewCustomers").get(getAllCustomers);

module.exports=router;