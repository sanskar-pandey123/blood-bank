const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    unitsRequired: { type: Number, required: true },
    hospitalName: { type: String, required: true },
    city: { type: String, required: true },
    contactPerson: { type: String, required: true },
    contactNumber: { type: String, required: true },
    urgency: { type: String, required: true },
    additionalInfo: String,
  },
  { timestamps: true }
);


module.exports =
  mongoose.models.BloodRequest ||
  mongoose.model("BloodRequest", bloodRequestSchema);
