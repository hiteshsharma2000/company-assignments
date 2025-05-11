const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  datetime: Date,
});

const ActivityModel= mongoose.model('Activity', ActivitySchema);

module.exports = {ActivityModel}
