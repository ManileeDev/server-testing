require("dotenv").config("")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ThanniModel = require("./model/thanni")
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
      app.listen(port,()=>{console.log(`DB connected and server is running on ${port}`)})
    })
  .catch((err) => {
    console.log(err);
  });


app.get("/",async (req,res)=>{
  try{
    const data = await ThanniModel.find({})
    if(!data.length > 0) return res.json({message: "No Data Found" })
    res.json({
      status: "Success",
      data,
    });
  }
  catch(err){
    res.status(400).json({
      message: err.message
    })
  }
})

app.post("/add",async (req,res)=>{
  try{
    const {name,date} = req.body;
  const data = await ThanniModel.create({name,date})
  res.json({
    status: "Success",
    data
  })
  }
  catch(err){
   res.status(400).json({
    message : err.message
   })
  }
})


