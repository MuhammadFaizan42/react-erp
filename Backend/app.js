// app.js
const express =  require("express");
const app = express();
const connectDB=require("./db/connect"); 

const IP_ADDRESS = '192.168.10.16';
const PORT =process.env.PORT || 5000;

const products_routes = require ("./routes/product")

app.get("/",(req,res)=>{
    res.send("Hi I m live ");
});

app.use("/api/products",products_routes);
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