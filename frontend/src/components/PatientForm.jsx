function PatientForm({
  name,
  setName,
  age,
  setAge,
  disease,
  setDisease,
  isEditing,
  addPatient,
  updatePatient,
  cancelEdit,
}) {
  return (
    <>
      <h2>{isEditing ? "Update Patient" : "Add Patient"}</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Disease"
        value={disease}
        onChange={(e) => setDisease(e.target.value)}
      />

      <br />
      <br />

      {isEditing ? (
        <>
          <button
            onClick={updatePatient}
            style={{
              background: "blue",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            Update Patient
          </button>

          <button
            onClick={cancelEdit}
            style={{
              background: "gray",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          onClick={addPatient}
          style={{
            background: "green",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Patient
        </button>
      )}

      <hr />
    </>
  );
}

export default PatientForm;