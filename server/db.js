const mongoose = require("mongoose");
const express = require("express");

require("dotenv").config();
require("./db");

const PORT = process.env.PORT || 3001;

const app = express();

// Access your MongoDB connection string from secrets
const mongoURI = process.env.MANGODB;
console.log(mongoURI);
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
