const express = require ("express");
const router = express.Router();
const {addStoreData,viewStoreData} =require("../controllers/storeDetail");


router.route("/addStoreDetail").post(addStoreData);
router.route("/viewStore").get(viewStoreData);

module.exports=router;