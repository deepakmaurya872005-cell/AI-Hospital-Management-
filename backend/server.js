require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Patient = require("./models/Patient");


const Doctor = require("./models/Doctor");
const Appointment = require("./models/Appointment");

const aiRoutes = require("./routes/aiRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/", aiRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

 

// Home API
app.get("/", (req, res) => {
  res.send("AI Hospital Management System Running");
});

// Get All Patients
app.get("/patients", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add Patient
app.post("/patients", async (req, res) => {
  try {
    const patient = new Patient({
      name: req.body.name,
      age: req.body.age,
      disease: req.body.disease,
    });

    await patient.save();

    res.json({
      message: "Patient Saved Successfully",
      patient: patient,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Update Patient
app.put("/patients/:id", async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Patient Updated Successfully",
      patient: patient,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete Patient
app.delete("/patients/:id", async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);

    res.json({
      message: "Patient Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= DOCTOR APIs =================

// Get All Doctors
app.get("/doctors", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add Doctor
app.post("/doctors", async (req, res) => {
  try {
    const doctor = new Doctor({
      name: req.body.name,
      specialization: req.body.specialization,
      experience: req.body.experience,
    });

    await doctor.save();

    res.json({
      message: "Doctor Added Successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Doctor
app.put("/doctors/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Doctor Updated Successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Doctor
app.delete("/doctors/:id", async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);

    res.json({
      message: "Doctor Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ================= APPOINTMENT APIs =================

// Get All Appointments
app.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add Appointment
app.post("/appointments", async (req, res) => {
  try {
    const appointment = new Appointment({
      patientName: req.body.patientName,
      doctorName: req.body.doctorName,
      date: req.body.date,
      time: req.body.time,
    });

    await appointment.save();

    res.json({
      message: "Appointment Added Successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Appointment
app.delete("/appointments/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);

    res.json({
      message: "Appointment Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});