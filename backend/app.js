const dotenv=require("dotenv");
dotenv.config();
const express =require("express");
const cors=require('cors');
const app= express();
const connectToDB=require('./db/db.js');
const userRoutes=require('./routes/user.routes.js');
const captainRoutes=require("./routes/captain.routes.js");
const cookieParser = require('cookie-parser');
connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

app.get('/',(req,res)=>{
    res.send("Hello World");
})

module.exports=app;