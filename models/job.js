const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  job: { type: String, required: true },
  price: { type: Number, required: true },
  completed:{type:Boolean, default:false, required: true  },
  checked: {type:Boolean, default:false, required: true },
  room: { type: String },
  userId: { type: String, default:"not assigned" },
  date: { type: Date, default: Date.now }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
