function DoctorForm({
  doctorName,
  setDoctorName,
  specialization,
  setSpecialization,
  experience,
  setExperience,
  addDoctor,
}) {
  return (
    <>
      <h2>Add Doctor</h2>

      <input
        type="text"
        placeholder="Doctor Name"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Specialization"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Experience (Years)"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={addDoctor}
        style={{
          background: "#16a34a",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Add Doctor
      </button>

      <hr />
    </>
  );
}

export default DoctorForm;