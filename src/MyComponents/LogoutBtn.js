import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token or authentication details
    localStorage.removeItem("token");

    // Redirect to Login page
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} style={styles.button}>
      Logout
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LogoutBtn;
