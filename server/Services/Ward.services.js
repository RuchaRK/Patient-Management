const Ward = require("../modules/ward.model");

async function showAllWards() {
  try {
    return await Ward.find();
  } catch (error) {
    throw new Error(error);
  }
}

async function showAWard(wardId) {
  try {
    return await Ward.findById(wardId);
  } catch (error) {
    throw new Error(error);
  }
}

async function showCurrentOccupancy() {
  try {
    const wards = await showAllWards();
    const currentOccupancy = await wards.reduce(
      (acc, cum) => acc.currentOccupancy + cum.currentOccupancy,
      0
    );
    return currentOccupancy;
  } catch (error) {
    throw new Error(error);
  }
}

async function addNewWard(wardData) {
  try {
    const ward = await Ward(wardData);
    await ward.save();
    return await showAllWards();
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteWard(wardId) {
  try {
    await Ward.findByIdAndDelete(wardId);
    return await showAllWards();
  } catch (error) {
    throw new Error(error);
  }
}

async function updateWard(wardId, updateData) {
  try {
    await Ward.findByIdAndUpdate(wardId, updateData);
    return await showAllWards();
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  showAWard,
  showAllWards,
  showCurrentOccupancy,
  addNewWard,
  updateWard,
  deleteWard,
};
