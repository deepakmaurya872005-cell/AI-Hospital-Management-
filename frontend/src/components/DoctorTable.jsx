import { FaTrash } from "react-icons/fa";

function DoctorTable({ doctors, deleteDoctor }) {
  return (
    <div className="table-container">
      <table className="patient-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor._id}>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.experience} Years</td>

              <td>
                <button
                  className="deleteBtn"
                  onClick={() => deleteDoctor(doctor._id)}
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

export default DoctorTable;