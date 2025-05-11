const express=require('express')
const {ActivityModel}=require('../Models/Activity')
const { auth } = require('../Middleware/auth')
const ActivityRoute=express.Router()


ActivityRoute.post("/",auth,async (req,res)=>{
    try {
        const data=await ActivityModel.find()
        res.send({"data":data})


    } catch (error) {
        console.log({msg:error});
        
    }
})
ActivityRoute.post("/create",async (req,res)=>{
    const activity=req.body
    try {
          const newActivity=new ActivityModel(activity)
          await newActivity.save()
        res.send({"res":"new activity is created"})


    } catch (error) {
        console.log({msg:error});
        
    }
})

module.exports={ActivityRoute}
