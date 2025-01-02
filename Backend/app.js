// app.js
const express =  require("express");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const app = express();
const connectDB=require("./db/connect"); 

const IP_ADDRESS = '192.168.10.23';
const PORT =process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

const products_routes = require ("./routes/product")
const supplier_routes = require ("./routes/supplierRoute")
const customer_routes = require ("./routes/customerRoute")
const store_routes = require ("./routes/storeRoute")
const uom_routes = require ("./routes/uomRoute")
const bank_routes = require ("./routes/bankRoute")
const fiscalYear_routes = require ("./routes/fiscalRoute")
const user_register = require ("./routes/userRegistration")
const login = require ("./routes/login")


app.get("/",(req,res)=>{
    res.send("Hi I m live ");
});

app.use("/api/products",products_routes);
app.use("/api/supplier",supplier_routes);
app.use("/api/customer",customer_routes);
app.use("/api/store",store_routes);
app.use("/api/uom",uom_routes);
app.use("/api/bank",bank_routes);
app.use("/api/fiscal",fiscalYear_routes);
app.use("/api",user_register);
app.use("/api",login);
const start =async()=>{
    try{
        app.listen(PORT, IP_ADDRESS, () => {
            console.log(`Server is running at http://${IP_ADDRESS}:${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
}
    start();