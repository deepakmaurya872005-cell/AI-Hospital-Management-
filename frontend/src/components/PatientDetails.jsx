import { FaUserInjured } from "react-icons/fa";

function PatientDetails({
  showDetails,
  selectedPatient,
  setShowDetails,
}) {
  if (!showDetails || !selectedPatient) return null;

  return (
    <div className="details">
      <h2>
        <FaUserInjured /> Patient Details
      </h2>

      <p>
        <b>Name:</b> {selectedPatient.name}
      </p>

      <p>
        <b>Age:</b> {selectedPatient.age}
      </p>

      <p>
        <b>Disease:</b> {selectedPatient.disease}
      </p>

      <button
        className="deleteBtn"
        onClick={() => setShowDetails(false)}
      >
        Close
      </button>
    </div>
  );
}

export default PatientDetails;