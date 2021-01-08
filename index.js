const port = 4000;
const express = require("express");
const { get } = require("http");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Event = require("./models/Event");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/Event", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`The App is listening in the port ${port}`);
});
//tracking the path of React Builder
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("/", (req, res) => {
  //resolving the frontend
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

app.post("/post/store", (req, res) => {
  Event.create(req.body, (error, Event) => {
    res.redirect("/");
  });
});

app.get("/list", (req, res) => {
  res.json({
    name: "BrainHub",
  });
});
