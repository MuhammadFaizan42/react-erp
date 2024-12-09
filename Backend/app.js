// app.js
const express =  require("express");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const app = express();
const connectDB=require("./db/connect"); 

const IP_ADDRESS = '192.168.10.7';
const PORT =process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

const products_routes = require ("./routes/product")
const supplier_routes = require ("./routes/supplierRoute")
const user_register = require ("./routes/userRegistration")
const login = require ("./routes/login")


app.get("/",(req,res)=>{
    res.send("Hi I m live ");
});

app.use("/api/products",products_routes);
app.use("/api/supplier",supplier_routes);
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