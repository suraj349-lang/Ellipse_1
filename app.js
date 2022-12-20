const express=require("express");
const app=express();
const port=process.env.PORT || 8081

app.route("/",(req,res,next)=>{
    res.send("Hello world");
})

app.listen(port,()=>{
    console.log("Listening on 8001")

})