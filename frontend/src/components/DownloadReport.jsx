import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function DownloadReport({ patients }) {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("AI Hospital Management Report", 14, 20);

    const tableData = patients.map((p) => [
      p.name,
      p.age,
      p.disease,
    ]);

    autoTable(doc, {
      head: [["Name", "Age", "Disease"]],
      body: tableData,
      startY: 30,
    });

    doc.save("Hospital_Report.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      style={{
        background: "#16a34a",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        margin: "20px 0",
      }}
    >
      📄 Download PDF Report
    </button>
  );
}

export default DownloadReport;