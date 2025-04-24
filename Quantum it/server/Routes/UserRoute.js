const express=require('express');
const { UserModel } = require('../Models/UserModel');
const bcrypt=require("bcrypt");
const jwt = require('jsonwebtoken');
const {auth}=require("../Middleware/auth")

const UserRoute=express.Router()

UserRoute.post('/register',async (req,res)=>{
    const { name, dob, email, password }=req.body;
     try {
     const finduser=await UserModel.findOne({email})
  if(finduser){
    res.send({msg:"already have account from email"})
  }

         bcrypt.hash(password,10,async function(err,hash){
           if(hash){
           const newuser=new UserModel({"name":name,"dob":dob,"email":email,"password":hash})
            await newuser.save()
            res.send({msg:"user has been register"})
           }else{
            res.send({"err":"somthing went wrong"})
           }
           })
    } catch (error) {
        
    }
})
UserRoute.post('/login',async (req,res)=>{
  const {email,password}=req.body;
  try {
     const getuser=await UserModel.findOne({email})
     if(getuser){
        bcrypt.compare(password,getuser.password,function(err,result){
            if(result){
                var token = jwt.sign({name:getuser.name,email:getuser.email,dob:getuser.dob}, "user",{expiresIn:"1h"});
                res.send({"msg":"login successfully","token":token})
            }else{
                res.send({"msg":"password not match"})
            }
        })
     }else{
        res.send({msg:"user not found with this email"})
     }
       

  } catch (error) {
    res.send({"msg":error})
  }
})

UserRoute.post("/dashboard",auth,async (req,res)=>{
    try {
        const data=await UserModel.find()
        res.send({"data":data})
    } catch (error){
        res.send({"err":error})
    }
})

module.exports={UserRoute}