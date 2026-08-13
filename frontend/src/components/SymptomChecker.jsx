import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState("");
   const [loading, setLoading] = useState(false);


  const checkSymptoms = async () => {
  if (!symptoms) {
    toast.error("Please enter symptoms");
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post(
      "http://35.154.66.198:5000/check-symptoms",
      {
        symptoms,
      }
    );

    setResult(res.data.result);
  } catch (error) {
    toast.error("AI Server Error");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <h2>🤖 AI Symptom Checker</h2>

      <textarea
        rows="5"
        placeholder="Example: fever, cough, headache..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
        }}
      />

      <br />
      <br />

      <button
  onClick={checkSymptoms}
  disabled={loading}
  style={{
    background: "#7c3aed",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  {loading ? "Analyzing..." : "Analyze Symptoms"}
</button>

      {result && (
       <div
  style={{
    marginTop: "20px",
    background: "#1e293b",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    whiteSpace: "pre-wrap",
    lineHeight: "1.8",
    border: "1px solid #7c3aed",
  }}
>
  <h3 style={{ color: "#a855f7" }}>🤖 AI Result</h3>

  <div
  style={{
    color: "#ffffff",
    whiteSpace: "pre-wrap",
    fontSize: "16px",
    lineHeight: "1.8",
  }}
>
  {result.split("\n").map((line, index) => (
    <p key={index}>{line}</p>
  ))}
</div>
</div>
      )}
    </>
  );
}

export default SymptomChecker;