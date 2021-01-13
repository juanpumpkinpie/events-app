const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

router.route("/events").get((req, res) => {
  Event.find().then((listEvents) => res.json(listEvents));
});

module.exports = router;
