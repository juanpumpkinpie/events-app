const mongoose = require("mongoose");
const Event = require("../models/Event");

mongoose.connect("mongodb://localhost/Event", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Event.create(
  {
    name: "Juan",
    lasName: "Guerrero S",
    email: "juan@juan.com",
    eventDay: "07/07/2021",
  },
  (error, Event) => {
    console.log(error, Event);
  }
);
