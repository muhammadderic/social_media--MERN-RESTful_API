const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello Deric");
})

// Listen
app.listen(5000, () => {
  console.log("server is listening");
})

// Connect to Database
mongoose.connect(process.env.MONGO_URL)
  .then(console.log("connected to database"));