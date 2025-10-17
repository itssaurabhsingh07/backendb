import express from "express";

const app=express()

app.get("/",(req,res)=>{
   res.status(200).json({message:"Hello This Side Saurabh"})
})
app.get("/signin",(req,res)=>{
    res.status(200).json({message:"User Login Succesfull"})
})

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Your Response")
})