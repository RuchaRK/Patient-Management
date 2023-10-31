const mongoose = require("mongoose");

const wardSchema = new mongoose.Schema({
  wardNumber: {
    type: Number,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  specializations: {
    type: String,
    required: true,
  },
  currentOccupancy: {
    type: String,
    required: true,
  },
  doctors: {
    type: number,
    required: true,
  },
});

const Ward = mongoose.model("Ward", wardSchema);

module.exports = Ward;
