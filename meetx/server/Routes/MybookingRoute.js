const express = require('express');
const mongoose = require('mongoose');
const {auth} = require('../Middleware/auth'); // make sure this is a function
const { BookingModel } = require('../Models/MyBooking');
const { ActivityModel } = require('../Models/Activity');



const Bookrouter = express.Router();
console.log('Bookrouter type:', typeof Bookrouter);



Bookrouter.post('/new/:activityId',auth, async (req, res) => {
  try {
    const activityId = req.params.activityId;

    const activity = await ActivityModel.findById(activityId);
    if (!activity) {
      return res.status(404).json({ msg: 'Activity not found' });
    }

    const existing = await BookingModel.findOne({ user: req.user.id, activity: activityId });
    if (existing) {
      return res.status(400).json({ msg: 'You already booked this activity' });
    }

    const booking = new BookingModel({
      user: req.user.id,
      activity: activityId,
    });

    await booking.save();
    res.status(201).json({ mag: 'Activity booked successfully',  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

Bookrouter.post('/:id', auth,async (req, res) => {
        const Id =req.params.id
  try {
    const bookings = await BookingModel.find({ user: Id }).populate('activity');
    console.log(bookings);
    
    res.status(200).json({"bookings":bookings});
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = {Bookrouter}; 
