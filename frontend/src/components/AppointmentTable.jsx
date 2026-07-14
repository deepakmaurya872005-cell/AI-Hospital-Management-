import { FaTrash } from "react-icons/fa";

function AppointmentTable({ appointments, deleteAppointment }) {
  return (
    <div className="table-container">
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((item) => (
            <tr key={item._id}>
              <td>{item.patientName}</td>
              <td>{item.doctorName}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>

              <td>
                <span
                  style={{
                    color:
                      item.status === "Approved"
                        ? "green"
                        : item.status === "Cancelled"
                        ? "red"
                        : "orange",
                    fontWeight: "bold",
                  }}
                >
                  {item.status}
                </span>
              </td>

              <td>
                <button
                  className="deleteBtn"
                  onClick={() => deleteAppointment(item._id)}
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

export default AppointmentTable;