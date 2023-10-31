const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  medicalHistory: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  currentMedicalCondition: {
    type: String,
    required: true,
  },
  lengthOfStay: {
    type: Number,
    required: true,
  },
  assignedWard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ward",
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
