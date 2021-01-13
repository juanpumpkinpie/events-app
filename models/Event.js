const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var now = new Date();

const EventSchema = new Schema({
  name: { type: String, required: true, trim: true, maxlength: 30 },
  lastName: { type: String, required: true, trim: true, maxlength: 30 },
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 60,
    unique: true,
  },
  eventDay: String,
});

// const EventSchema = new Schema({
//   name: String,
//   lastName: String,
//   email: String,
//   date: { type: Date, default: Date.now },
// });

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
