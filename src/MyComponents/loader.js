// Loader.js
import React from "react";
import "../App.css"; // Assuming you have custom styles here

const loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div> {/* Add your spinner CSS */}
      <h3>Loading...</h3>
    </div>
  );
};

export default loader;
