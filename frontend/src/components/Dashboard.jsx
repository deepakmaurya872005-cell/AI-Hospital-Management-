import {
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaVirus,
} from "react-icons/fa";

import { useState, useEffect } from "react";

//import CountUp from "react-countup";

function Dashboard({ patients, doctors, appointments }) {

  const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);

const youngest =
  patients.length > 0
    ? Math.min(...patients.map((p) => Number(p.age)))
    : 0;

const oldest =
  patients.length > 0
    ? Math.max(...patients.map((p) => Number(p.age)))
    : 0;

const averageAge =
  patients.length > 0
    ? (
        patients.reduce((sum, p) => sum + Number(p.age), 0) /
        patients.length
      ).toFixed(1)
    : 0;

const diseaseCount = {};

patients.forEach((p) => {
  diseaseCount[p.disease] =
    (diseaseCount[p.disease] || 0) + 1;
});

const commonDisease =
  Object.keys(diseaseCount).length > 0
    ? Object.keys(diseaseCount).reduce((a, b) =>
        diseaseCount[a] > diseaseCount[b] ? a : b
      )
    : "N/A";

  return (
  <>
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      <h2>🏥 Welcome to AI Hospital Management System</h2>

      <p
        style={{
          color: "#cbd5e1",
          marginTop: "10px",
        }}
      >
        {currentTime.toLocaleDateString()} |{" "}
        {currentTime.toLocaleTimeString()}
      </p>
    </div>

    <div
  style={{
    background: "#1e293b",
    padding: "15px",
    borderRadius: "15px",
    marginBottom: "20px",
  }}
>
  <h3>Hospital Progress</h3>

  <div
    style={{
      width: "100%",
      height: "20px",
      background: "#334155",
      borderRadius: "20px",
      overflow: "hidden",
      marginTop: "10px",
    }}
  >
    <div
      style={{
        width: `${Math.min(
          (patients.length + doctors.length + appointments.length) * 5,
          100
        )}%`,
        height: "100%",
        background: "linear-gradient(90deg,#22c55e,#3b82f6)",
        transition: "1s",
      }}
    ></div>
  </div>

  <p style={{ marginTop: "10px" }}>
    Hospital Data Completion :
    {" "}
    {Math.min(
      (patients.length + doctors.length + appointments.length) * 5,
      100
    )}
    %
  </p>
</div>

<div
  style={{
    background: "#1e293b",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px",
  }}
>
  <h2>Recent Activity</h2>

  <ul
    style={{
      listStyle: "none",
      marginTop: "15px",
      lineHeight: "2",
    }}
  >
    <li>🧑 Patients Registered : {patients.length}</li>

    <li>👨‍⚕ Doctors Available : {doctors.length}</li>

    <li>📅 Appointments Booked : {appointments.length}</li>

    <li>🦠 Diseases Recorded : {new Set(patients.map(p => p.disease)).size}</li>

    <li>🕒 Last Updated : {currentTime.toLocaleTimeString()}</li>
  </ul>
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "15px",
    marginBottom: "25px",
  }}
>

<button
style={{
padding:"18px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"12px",
fontWeight:"bold"
}}
>
➕ Add Patient
</button>

<button
  onClick={() =>
    document
      .getElementById("doctor-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  style={{
    padding: "18px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  👨‍⚕ Add Doctor
</button>

<button
  onClick={() =>
    document
      .getElementById("appointment-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  style={{
    padding: "18px",
    background: "#ea580c",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  📅 Book Appointment
</button>

<button
  onClick={() =>
    document
      .getElementById("ai-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  style={{
    padding: "18px",
    background: "#9333ea",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  🤖 AI Checker
</button>

</div>

    <div className="dashboard">

      <div className="dashboard-card blue">
        <FaUserInjured size={40} />


      <h2>{patients.length}</h2>


        <p>Total Patients</p>
      </div>

      <div className="dashboard-card green">
        <FaUserMd size={40} />
      <h2>{doctors.length}</h2>
        <p>Total Doctors</p>
      </div>

      <div className="dashboard-card orange">
        <FaCalendarCheck size={40} />

      <h2>{appointments.length}</h2>



        <p>Appointments</p>
      </div>

      <div className="dashboard-card red">
        <FaVirus size={40} />
       
<h2>{new Set(patients.map((p) => p.disease)).size}</h2>
        <p>Diseases</p>

        <h4 style={{ marginTop: "10px", fontSize: "14px" }}>
  Most Common:
  {
    patients.length
      ? patients
          .map((p) => p.disease)
          .sort(
            (a, b) =>
              patients.filter((x) => x.disease === b).length -
              patients.filter((x) => x.disease === a).length
          )[0]
      : "N/A"
  }
</h4>
      </div>

       </div>

      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginTop: "30px",
  }}
>
  <div className="dashboard-card blue">
    <h2>{youngest}</h2>
    <p>Youngest Patient</p>
  </div>

  <div className="dashboard-card green">
    <h2>{oldest}</h2>
    <p>Oldest Patient</p>
  </div>

  <div className="dashboard-card orange">
    <h2>{averageAge}</h2>
    <p>Average Age</p>
  </div>

  <div className="dashboard-card red">
    <h2>{commonDisease}</h2>
    <p>Most Common Disease</p>
  </div>
</div>

<div
  style={{
    marginTop: "30px",
    background: "#1e293b",
    padding: "20px",
    borderRadius: "15px",
  }}
>
  <h2 style={{ marginBottom: "20px" }}>📈 Hospital Summary</h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      textAlign: "center",
    }}
  >
    <thead>
      <tr style={{ background: "#2563eb", color: "white" }}>
        <th style={{ padding: "12px" }}>Metric</th>
        <th style={{ padding: "12px" }}>Value</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={{ padding: "10px" }}>Total Patients</td>
        <td>{patients.length}</td>
      </tr>

      <tr>
        <td style={{ padding: "10px" }}>Total Doctors</td>
        <td>{doctors.length}</td>
      </tr>

      <tr>
        <td style={{ padding: "10px" }}>Appointments</td>
        <td>{appointments.length}</td>
      </tr>

      <tr>
        <td style={{ padding: "10px" }}>Different Diseases</td>
        <td>{new Set(patients.map((p) => p.disease)).size}</td>
      </tr>

      <tr>
        <td style={{ padding: "10px" }}>Average Age</td>
        <td>{averageAge}</td>
      </tr>
    </tbody>
  </table>
</div>

  </>
);
} 

export default Dashboard;