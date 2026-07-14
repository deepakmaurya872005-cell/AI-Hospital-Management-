import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExportExcel({ patients }) {

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(patients);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Patients");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(file, "Hospital_Report.xlsx");
  };

  return (
    <button
      onClick={exportToExcel}
      style={{
        background: "#16a34a",
        color: "white",
        padding: "15px",
        border: "none",
        borderRadius: "10px",
        width: "100%",
        margin: "20px 0",
        cursor: "pointer",
      }}
    >
      📊 Export Excel Report
    </button>
  );
}

export default ExportExcel;