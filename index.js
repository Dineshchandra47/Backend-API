const express=require("express");
const mongoose=require("mongoose");
const app=require("./app.js");
const PORT = 3000

mongoose.set('strictQuery', true);

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/api_web_tech_assignment"
mongoose.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("connected to Database");
    app.listen(PORT,()=>console.log(`server is up and running on ${PORT}`))
})
.catch((err)=>console.log(err))