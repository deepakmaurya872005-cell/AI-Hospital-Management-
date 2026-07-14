import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "80px auto",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px gray",
        textAlign: "center",
      }}
    >
      <h2>Hospital Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;