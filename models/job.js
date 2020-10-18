const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  job: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
