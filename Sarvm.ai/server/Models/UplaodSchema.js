const mongoose=require('mongoose')

const Filecshema=mongoose.Schema({
    id:String,
    seatNo:String
},{versionKey:false})



module.exports=mongoose.model("upload",Filecshema)