const express = require("express");

const wardRouter = express.Router();

const {
  showAWard,
  showAllWards,
  showCurrentOccupancy,
  addNewWard,
  updateWard,
  deleteWard,
} = require("../Services/Ward.services");

wardRouter.get("/", async (req, res) => {
  try {
    const allWards = await showAllWards();
    res.status(200).json({ message: "Success", allWards });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

wardRouter.get("/api/wards/currentOccupancy", async (req, res) => {
  try {
    const rate = await showCurrentOccupancy();
    res.status(200).json({ message: "Success", rate });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

wardRouter.get("/:wardId", async (req, res) => {
  try {
    const { wardId } = req.params;
    const ward = await showAWard(wardId);
    res.status(200).json({ message: "Success", ward });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

wardRouter.post("/", async (req, res) => {
  try {
    const newWardData = req.body;
    const allWards = await addNewWard(newWardData);
    res.status(200).json({ message: "Success", allWards });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

wardRouter.delete("/:wardId", async (req, res) => {
  try {
    const { wardId } = req.params;
    const allWards = await deleteWard(wardId);
    res.status(200).json({ message: "Success", allWards });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

wardRouter.post("/:wardId", async (req, res) => {
  try {
    const { wardId } = req.params;
    const updateData = req.body;
    const allWards = await updateWard(wardId, updateData);
    res.status(200).json({ message: "Success", allWards });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

module.exports = wardRouter;
