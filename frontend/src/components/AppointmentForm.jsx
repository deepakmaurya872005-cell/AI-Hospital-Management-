function AppointmentForm({
  patients,
  doctors,

  patientName,
  setPatientName,

  doctorName,
  setDoctorName,

  date,
  setDate,

  time,
  setTime,
  status,
  setStatus,

  addAppointment,
}) {
  return (
    <>
      <h2>Book Appointment</h2>

      {/* Patient */}

      <select
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      >
        <option value="">Select Patient</option>

        {patients.map((patient) => (
          <option
            key={patient._id}
            value={patient.name}
          >
            {patient.name}
          </option>
        ))}
      </select>

      <br />
      <br />

      {/* Doctor */}

      <select
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      >
        <option value="">Select Doctor</option>

        {doctors.map((doctor) => (
          <option
            key={doctor._id}
            value={doctor.name}
          >
            {doctor.name}
          </option>
        ))}
      </select>

      <br />
      <br />

      {/* Date */}

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      {/* Time */}

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <br />
      <br />

      <select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option value="Pending">Pending</option>
  <option value="Completed">Completed</option>
  <option value="Cancelled">Cancelled</option>
</select>

<br />
<br />

      <button
        onClick={addAppointment}
        style={{
          background: "#9333ea",
          color: "white",
          border: "none",
          padding: "12px",
          width: "100%",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Book Appointment
      </button>

      <hr />
    </>
  );
}

export default AppointmentForm;