const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    gender: String,
    bloodGroup: String,
    city: String,
    phone: String,
    lastDonation: String,
    healthIssue: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donor", donorSchema);
