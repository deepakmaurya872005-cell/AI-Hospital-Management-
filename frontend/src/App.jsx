import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";

import "./App.css";

import PatientTable from "./components/PatientTable";

import { useState, useEffect } from "react";
import axios from "axios";
import { FaHospital } from "react-icons/fa";

import PatientForm from "./components/PatientForm";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";

import DoctorForm from "./components/DoctorForm";
import DoctorTable from "./components/DoctorTable";

import AppointmentForm from "./components/AppointmentForm";
import AppointmentTable from "./components/AppointmentTable";


import Login from "./components/Login";

import SymptomChecker from "./components/SymptomChecker";

import DiseaseChart from "./components/DiseaseChart";

import DownloadReport from "./components/DownloadReport";
 

import BarChart from "./components/BarChart";


import LineChart from "./components/LineChart";

import HealthTips from "./components/HealthTips";

import ExportExcel from "./components/ExportExcel";
 


//import PatientDetails from "./components/PatientDetails";

function App() {
  const [name, setName] = useState("");
const [age, setAge] = useState("");
const [disease, setDisease] = useState("");

const [patients, setPatients] = useState([]);
const [search, setSearch] = useState("");

const [editId, setEditId] = useState(null);
const [isEditing, setIsEditing] = useState(false);

const [doctorName, setDoctorName] = useState("");
const [specialization, setSpecialization] = useState("");
const [experience, setExperience] = useState("");
const [doctors, setDoctors] = useState([]);

const [appointments, setAppointments] = useState([]);

const [patientName, setPatientName] = useState("");
const [doctorNameAppointment, setDoctorNameAppointment] = useState("");
const [appointmentDate, setAppointmentDate] = useState("");
const [time, setTime] = useState("");

const [status, setStatus] = useState("Pending");

 // New state for time

const [loggedIn, setLoggedIn] = useState(false);



const [loading, setLoading] = useState(true);



const getPatients = async () => {
  const res = await axios.get("http://localhost:5000/patients");
  setPatients(res.data);

   console.log(res.data); 
};


const getDoctors = async () => {
  const res = await axios.get("http://localhost:5000/doctors");
  setDoctors(res.data);
};

const getAppointments = async () => {
  const res = await axios.get("http://localhost:5000/appointments");
  setAppointments(res.data);
};

useEffect(() => {
  const loadData = async () => {
    await getPatients();
    await getDoctors();
    await getAppointments();

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  loadData();
}, []);

// useEffect(() => {
//   document.body.className = darkMode ? "dark-theme" : "light-theme";
// }, [darkMode]);


const addDoctor = async () => {
  if (!doctorName || !specialization || !experience) {
    toast.error("Please fill all doctor fields");
    return;
  }

  await axios.post("http://localhost:5000/doctors", {
    name: doctorName,
    specialization,
    experience,
  });

  

  toast.success("Doctor Added Successfully");

  setDoctorName("");
  setSpecialization("");
  setExperience("");

  getDoctors();
};

const addPatient = async () => {

  if (!name || !age || !disease) {
  toast.error("Please fill all fields");
  return;
}
  await axios.post("http://localhost:5000/patients", {
    name,
    age,
    disease,
  });

  getPatients();

  setName("");
  setAge("");
  setDisease("")
  toast.success("Patient Added Successfully");
};

const editPatient = (patient) => {
  setName(patient.name);
  setAge(patient.age);
  setDisease(patient.disease);

  setEditId(patient._id);
  setIsEditing(true);
};

const deletePatient = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this patient?"
  );

  if (!confirmDelete) return;

  await axios.delete(`http://localhost:5000/patients/${id}`);

  //toast.success("Patient Deleted Successfully");

  getPatients();
};

const deleteDoctor = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this doctor?"
  );

  if (!confirmDelete) return;

  await axios.delete(`http://localhost:5000/doctors/${id}`);

  toast.success("Doctor Deleted Successfully");

  getDoctors();
};


const updatePatient = async () => {
  if (!name || !age || !disease) {
    toast.error("Please fill all fields");
    return;
  }

  await axios.put(`http://localhost:5000/patients/${editId}`, {
    name,
    age,
    disease,
  });

  toast.success("Patient Updated Successfully");

  getPatients();

  cancelEdit();
};

const cancelEdit = () => {
  setName("");
  setAge("");
  setDisease("");

  setEditId(null);
  setIsEditing(false);
};


const addAppointment = async () => {
if (
  !patientName ||
  !doctorNameAppointment ||
  !appointmentDate ||
  !time
) {
  toast.error("Please fill all appointment fields");
  return;
}

  await axios.post("http://localhost:5000/appointments", {
  patientName,
  doctorName: doctorNameAppointment,
  date: appointmentDate,
  time,
  status,
});
 

  toast.success("Appointment Added Successfully");

  setPatientName("");
  setDoctorNameAppointment("");
  setAppointmentDate("");
  setTime("");

  getAppointments();
};


const deleteAppointment = async (id) => {
  if (!window.confirm("Delete Appointment?")) return;

  await axios.delete(
    `http://localhost:5000/appointments/${id}`
  );

  toast.success("Appointment Deleted");

  getAppointments();
};

if (!loggedIn) {
  return <Login onLogin={() => setLoggedIn(true)} />;
}

if (loading) {
  return (
    <div className="loader-container">
      <div className="loader"></div>

      <h2>Loading AI Hospital...</h2>
    </div>
  );
}
 
return (
  <>
    <div className="container">

      <Navbar />

      <div className="header">
        <h1>
          <FaHospital /> AI Hospital Management System
        </h1>
      </div>

      <PatientForm
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        disease={disease}
        setDisease={setDisease}
        isEditing={isEditing}
        addPatient={addPatient}
        updatePatient={updatePatient}
        cancelEdit={cancelEdit}
      />

    <Dashboard
  patients={patients}
  doctors={doctors}
  appointments={appointments}
/>

 <DiseaseChart patients={patients} />

     <DownloadReport patients={patients} />

     <ExportExcel patients={patients} />

     <BarChart patients={patients}/>

     <LineChart patients={patients}/>
     
     <HealthTips/>

    <div id="doctor-section">

  <DoctorForm
    doctorName={doctorName}
    setDoctorName={setDoctorName}
    specialization={specialization}
    setSpecialization={setSpecialization}
    experience={experience}
    setExperience={setExperience}
    addDoctor={addDoctor}
  />

</div>

<h2>Doctor List</h2>

<DoctorTable
  doctors={doctors}
  deleteDoctor={deleteDoctor}
/>

<div id="appointment-section">

  <AppointmentForm
    patients={patients}
    doctors={doctors}

    patientName={patientName}
    setPatientName={setPatientName}

    doctorName={doctorNameAppointment}
    setDoctorName={setDoctorNameAppointment}

    date={appointmentDate}
    setDate={setAppointmentDate}

    time={time}
    setTime={setTime}

    status={status}
    setStatus={setStatus}

    addAppointment={addAppointment}
  />

</div>

<h2>Appointment List</h2>

<AppointmentTable
  appointments={appointments}
  deleteAppointment={deleteAppointment}
/>
  <div id="ai-section">

  <SymptomChecker />

</div>

      <h2>Patient List</h2>

    


      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {patients.filter((patient) =>
        patient.name.toLowerCase().includes(search.toLowerCase())
      ).length === 0 ? (
        <h3
          style={{
            textAlign: "center",
            color: "red",
          }}
        >
          No Patient Found
        </h3>
      ) : (

        
        <PatientTable
          patients={patients}
          search={search}
          editPatient={editPatient} 
          deletePatient={deletePatient}
        />
      )}
    </div>
    <footer
  style={{
    textAlign: "center",
    marginTop: "40px",
    padding: "20px",
    color: "gray",
  }}
>
  AI Hospital Management System © 2026 | Developed by Deepak
</footer>

     <ToastContainer position="top-right" />
  </>
);
}

export default App;

