const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");

const users = require("./routes/api/userRoutes/users");
const jobs = require("./routes/api/jobRoutes/jobs");
// require ('dotenv').config();
// var nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//   service:'outlook',
// auth:{
//   user:process.env.EMAIL,
//   pass: process.env.PASSWORD
// }
// })

// let mailOptions = {
//   from: 'benhilliard23@hotmail.com',
//   to: 'benhilliard23@hotmail.com',
//   subject: 'test',
//   text: 'test works'
// };

// transporter.sendMail(mailOptions, function (err,data) {
//   if (err){
//     console.log('Error occurs');
//   } else {
//     console.log('Email sent')
//   }
  
// })

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/userRoutes/users", users);
app.use("/api/jobRoutes/jobs", jobs)

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and going on port ${port} !`));