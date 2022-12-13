//setup express
const express = require("express");
//setup middleware
const cors = require("cors");
//setup database
const mongoose = require("mongoose");
//setup and use the routers
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

//for env variables
require("dotenv").config();

//create the express server
const app = express();
const port = process.env.PORT || 5000;

//connect middleware
app.use(cors());
//allows to parse json for sending and receiving
app.use(express.json());
//database uri - refer to mongoDB to get the connection sring
const URI = process.env.ATLAS_URI;

//pass the url where db is stored
//start the connection
mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true, extended: true },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established  successfully");
});

//what starts the server
app.listen(port, () => {
  console.log(`server is runninng on port: ${port}`);
});
