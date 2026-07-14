import { FaHospital } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaHospital />
        <span>AI Hospital</span>
      </div>

      <ul className="nav-links">
        <li>Dashboard</li>
        <li>Patients</li>
        <li>Doctors</li>
        <li>Appointments</li>
      </ul>
    </nav>
  );
}

export default Navbar;