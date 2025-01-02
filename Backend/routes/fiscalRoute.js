const express = require ("express");
const router = express.Router();
const {addFiscalYear,viewFiscalYears,updateFiscalYearStatus} =require("../controllers/fiscalYear");


router.route("/addFiscalYear").post(addFiscalYear);
router.route("/viewFiscalYears").get(viewFiscalYears);
router.route("/updateFiscalYear").get(updateFiscalYearStatus);


module.exports=router;