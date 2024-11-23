import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./PastPapers.css"; // Assuming you want to include the CSS file

const DepartmentButton = ({ to, children }) => (
  <NavLink
    to={to}
    className="btn btn-custom btn-block mb-3 animate-button"
  >
    {children}
  </NavLink>
);

const PastPapers = () => {
  return (
    <div>
      {/* Background Video */}
      <div className="video-container animate-video">
        <video autoPlay muted loop className="bg-video">
          <source
            src="https://cdn.pixabay.com/video/2021/08/05/84007-584870927_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text animate-overlay">
          <h1 className="overlay-heading animate-heading">
            Welcome to the Department Resources Hub
          </h1>
          <br />
          <p className="overlay-subheading animate-subheading">
            Explore past papers from various departments below
          </p>
          <p className="overlay-description animate-description">
            Download resources from a variety of departments. This platform
            offers quick, easy access to past papers to help you prepare for
            exams and enhance your learning experience. Whether you're preparing
            for exams or seeking extra practice, this hub is built to support
            your academic journey. Enjoy your time here!
          </p>
        </div>
      </div>

      {/* Departments Section */}
      <div className="section-2" style={{ backgroundColor: "#002244" }}>
        <div className="container mt-5">
          <h1 className="text-center heading animate-title">Departments</h1>
          <hr className="divider animate-divider" />
          <div className="row">
            <div className="col-md-6">
              <div className="department-buttons">
                <DepartmentButton to="/comsci">
                  Computer Science Department
                </DepartmentButton>
                <DepartmentButton to="/maths">
                  Mathematics Department
                </DepartmentButton>
                <DepartmentButton to="/eng">
                  English Department
                </DepartmentButton>
                <DepartmentButton to="/urdu">
                  Urdu Department
                </DepartmentButton>
                <DepartmentButton to="/bba">
                  Business Administration Department
                </DepartmentButton>
                <DepartmentButton to="/chemistry">
                  Chemistry Department
                </DepartmentButton>
              </div>
            </div>
            <div className="col-md-6">
              <div className="department-buttons">
                <DepartmentButton to="/botany">
                  Botany Department
                </DepartmentButton>
                <DepartmentButton to="/bio">
                  Biology Department
                </DepartmentButton>
                <DepartmentButton to="/psyc">
                  Psychology Department
                </DepartmentButton>
                <DepartmentButton to="/phy">
                  Physics Department
                </DepartmentButton>
                <DepartmentButton to="/economics">
                  Economics Department
                </DepartmentButton>
                <DepartmentButton to="/islamic">
                  Islamic Studies Department
                </DepartmentButton>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default PastPapers;
