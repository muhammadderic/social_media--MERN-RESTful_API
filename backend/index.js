const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const authRouter = require("./routers/auth");
const usersRouter = require("./routers/users");
const postsRouter = require("./routers/posts");

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/posts", postsRouter);

// Listen
app.listen(5000, () => {
  console.log("server is listening");
})

// Connect to Database
// mongoose.connect(process.env.MONGO_URL)
//   .then(console.log("connected to database"));