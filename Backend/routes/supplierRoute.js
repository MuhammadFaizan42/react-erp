const express = require ("express");
const router = express.Router();
const {levelFour, levelFive,addSupplier,viewAllSuppliers} =require("../controllers/supplier");


router.route("/levelFour").get(levelFour);
router.route("/levelFive").get(levelFive);
router.route("/addSupplier").post(addSupplier);
router.route("/viewSuppliers").get(viewAllSuppliers);

module.exports=router;