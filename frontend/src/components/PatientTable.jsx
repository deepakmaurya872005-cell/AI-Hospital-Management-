import { FaEdit, FaTrash } from "react-icons/fa";

function PatientTable({
  patients,
  search,
  editPatient,

  deletePatient,
}) {
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredPatients.length === 0) {
    return <h3 className="no-data">No Patient Found</h3>;
  }

  return (
    <div className="table-container">
      <table className="patient-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient._id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.disease}</td>

              <td>
                <button
                  className="editBtn"
                  onClick={() => editPatient(patient)}
                >
                  <FaEdit />
                </button>

                <button
                  className="deleteBtn"
                  onClick={() => deletePatient(patient._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;