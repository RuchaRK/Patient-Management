const Patient = require("../modules/patient.model");

async function showAllPatients() {
  try {
    const allPatients = await Patient.find().populate(
      "assignedWard",
      "specializations wardNumber"
    );

    return allPatients;
  } catch (error) {
    throw new Error(error);
  }
}

async function showAPatient(patientId) {
  try {
    const patient = await Patient.findById(patientId);
    return patient;
  } catch (error) {
    throw new Error(error);
  }
}

async function addNewPatient(patientData) {
  try {
    const patient = new Patient(patientData);
    await patient.save();
    const allPatients = await showAllPatients();
    return allPatients;
  } catch (error) {
    throw new Error(error);
  }
}

async function deletePatient(patientId) {
  try {
    await Patient.findByIdAndDelete(patientId);
    const allPatients = await showAllPatients();
    return allPatients;
  } catch (error) {
    throw new Error(error);
  }
}

async function updatePatient(patientId, updateData) {
  try {
    await Patient.findByIdAndUpdate(patientId, updateData);
    const allPatients = await showAllPatients();
    return allPatients;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  showAllPatients,
  showAPatient,
  updatePatient,
  deletePatient,
  addNewPatient,
};
