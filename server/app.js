const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const app = express()


app.get("/", (req, res)=>{
    res.send(("<h2>hello world</h2>"))
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(("data connected"))
})
.catch((error)=>{
    console.log(("error"))
})

app.listen(6001, () =>{
    console.log("hey! start listening now")
})




