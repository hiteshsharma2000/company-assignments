const mongoose=require('mongoose')

const CourseSchema=mongoose.Schema({
    name:String,
    duration:String,
    price:String
},{versionKey:false})

const CourseModel=mongoose.model("course",CourseSchema)

module.exports={CourseModel}