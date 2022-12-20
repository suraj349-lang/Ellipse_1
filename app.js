const express=require("express");
const app=express();

app.route("/",(req,res,next)=>{
    res.send("Hello world");
})

app.listen(3000,()=>{
    console.log("Listening on 3000")

})