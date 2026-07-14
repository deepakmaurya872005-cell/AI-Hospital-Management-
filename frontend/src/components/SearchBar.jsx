import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div
      style={{
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      <FaSearch
        style={{
          color: "#0d6efd",
          marginRight: "10px",
          fontSize: "20px",
        }}
      />

      <input
        type="text"
        placeholder="Search Patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}

export default SearchBar;