const express=require('express')
require('dotenv').config();
const { CourseModel } = require('../Models/Course')
const { auth } = require('../Middleware/auth')
// const { instance } = require('../index')
const Razorpay = require('razorpay')
const courseRoute=express.Router()

const key_id_value=process.env.key_id
const key_secret_value=process.env.key_secret
const instance=new Razorpay({
    key_id:process.env.key_id,
    key_secret:key_secret_value
})
courseRoute.post('/',auth,async (req,res)=>{
    try {
           const data=await CourseModel.find()
           res.send({'data':data})


    } catch (error) {
        res.send({msg:error})
    }

})
courseRoute.post("/create",async (req,res)=>{
    const obj=req.body
    try {
          const newcourse= new CourseModel(obj)
          await newcourse.save() 
          res.send({msg:"course has been created"})


    } catch (error) {
        res.send({msg:error})
    }
})
courseRoute.post("/create-order", async (req, res) => {
    const { amount, currency = "INR", receipt } = req.body;
    try {
      const order = await instance.orders.create({
        amount: amount * 100, // Amount in paisa
        currency,
        receipt,
      });
      res.json(order);
    } catch (err) {
        console.error("Razorpay order creation error:", err); // Log this
        res.status(500).send("Error creating order");
    }
  });
  
  // Verify payment
  courseRoute.post("/verify-payment", (req, res) => {
    const { order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
    const hmac = crypto.createHmac("sha256", process.env.key_secret_value);
    hmac.update(order_id + "|" + razorpay_payment_id);
    const digest = hmac.digest("hex");
  
    if (digest === razorpay_signature) {
      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  });

module.exports={courseRoute}
