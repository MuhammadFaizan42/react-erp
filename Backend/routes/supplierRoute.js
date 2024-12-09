const express = require ("express");
const router = express.Router();
const {levelFour, levelFive,addSupplier} =require("../controllers/supplier");


router.route("/levelFour").get(levelFour);
router.route("/levelFive").get(levelFive);
router.route("/addSupplier").post(addSupplier);

module.exports=router;