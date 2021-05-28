//Importing Express And Initializing The App
const express = require("express");
const app = express();
//Importing Mongoose
const { connect } = require("mongoose");
//Importing dotenv file
require("dotenv").config();
//Declaring the port
const Port = process.env.PORT || 5000;
//First Route
app.get("/", (res) => {
  res.status(200).json({ msg: "No Error" });
});

//Connection to mongoDB through mongoose
connect(
  "mongodb+srv://rajat:rajat12345@cluster0.m6swy.mongodb.net/School",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    try {
      console.log("Connected to database");
    } catch (error) {
      console.log(error);
    }
  }
);
//Server listening at port 5000
app.listen(Port, () => {
  console.log(`Server listening at ${Port}`);
});
