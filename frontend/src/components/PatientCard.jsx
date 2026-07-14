import { FaUserInjured } from "react-icons/fa";

function PatientCard({
  patient,
  editPatient,
  viewPatient,
  deletePatient,
}) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ color: "#0d6efd" }}>
        <FaUserInjured /> {patient.name}
      </h3>

      <p>
        <b>Age:</b> {patient.age}
      </p>

      <p>
        <b>Disease:</b> {patient.disease}
      </p>

      <button
        onClick={() => editPatient(patient)}
        style={{
          background: "green",
          color: "white",
          border: "none",
          padding: "8px 15px",
          marginRight: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Edit
      </button>

      <button
        onClick={() => viewPatient(patient)}
        style={{
          background: "blue",
          color: "white",
          border: "none",
          padding: "8px 15px",
          marginRight: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View
      </button>

      <button
        onClick={() => deletePatient(patient._id)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "8px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default PatientCard;