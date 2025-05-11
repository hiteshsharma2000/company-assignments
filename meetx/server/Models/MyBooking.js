const mongoose=require('mongoose')

const BookingSchema =mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }
});

const BookingModel=mongoose.model("book",BookingSchema)


module.exports={BookingModel}