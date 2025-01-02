const express = require ("express");
const router = express.Router();
const {addUom,viewUom} =require("../controllers/uom");


router.route("/addUom").post(addUom);
router.route("/viewUom").get(viewUom);

module.exports=router;