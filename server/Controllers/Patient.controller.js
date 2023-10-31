const express = require("express");

const patientRouter = express.Router();

const {
  showAllPatients,
  avgLengthOfStay,
  showAPatient,
  updatePatient,
  deletePatient,
  addNewPatient,
} = require("../Services/Patient.services");

patientRouter.get("/", async (req, res) => {
  try {
    const allPatients = await showAllPatients();
    res.status(200).json({ message: "Success", allPatients });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

patientRouter.get("/lengthofStay", async (req, res) => {
  try {
    const lengthOfStay = await avgLengthOfStay();
    res.status(200).json({ message: "Success", lengthOfStay });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

patientRouter.get("/totalpatients", async (req, res) => {
  try {
    const allPatients = await showAllPatients();
    const total = await allPatients.length();
    res.status(200).json({ message: "Success", total });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

patientRouter.get("/:patientId", async (req, res) => {
  try {
    const { patientId } = req.params;
    const patient = await showAPatient(patientId);
    res.status(200).json({ message: "Success", patient });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

patientRouter.post("/", async (req, res) => {
  try {
    const newPatientData = req.body;
    const allPatients = await addNewPatient(newPatientData);
    res.status(200).json({ message: "Success", allPatients });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

patientRouter.delete("/:patientId", async (req, res) => {
  try {
    const { patientId } = req.params;
    const allPatients = await deletePatient(patientId);
    console.log(allPatients);
    res.status(200).json({ message: "Success", allPatients });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

patientRouter.post("/:patientId", async (req, res) => {
  try {
    const { patientId } = req.params;
    const updateData = req.body;
    const allPatients = await updatePatient(patientId, updateData);

    res.status(200).json({ message: "Success", allPatients });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

module.exports = patientRouter;
