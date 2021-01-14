require("dotenv").config();
const express = require("express");
const { get } = require("http");
const app = express();
const port = process.env.PORT || 4000;
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Event = require("./models/Event");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`The App is listening in the port ${port}`);
});
//tracking the path of React Builder
app.use(express.static(path.join(__dirname, "./frontend/build")));

//notFound
app.get((req, res, next) => {
  res.send("Please got to the main page");
});

app.get("/", (req, res) => {
  //resolving the frontend
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

app.post("/post/store", async (req, res) => {
  await Event.create(req.body);
  res.redirect("/");
});

app.get("/ev", (req, res) => {
  res.json({
    name: "BrainHub",
  });
});

app.use("/", require("./routes/EventRoute"));
