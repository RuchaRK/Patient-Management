const express = require("express");
require("dotenv").config();
require("./db");

const PORT = process.env.PORT || 3001;

const app = express();

const patientRouter = require("./Controllers/Patient.controller");
const wardRouter = require("./Controllers/Ward.controller");

app.use(express.json());

app.use("/api/patients", patientRouter);

app.use("/api/wards", wardRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
