import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./PastPapers.css";  // Add a separate CSS file for the animation styles

const DepartmentButton = ({ to, children }) => (
  <NavLink to={to} className="btn btn-custom btn-block mb-3 animate-button">
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
          </h1> <br />
          <p className="overlay-subheading animate-subheading">
            Explore past papers from various departments below
          </p> 
          <p className="overlay-description animate-description">
            Download resources from a variety of departments. This platform
            offers quick, easy access to past papers to help you prepare for
            exams and enhance your learning experience. Feel free to browse,
            download, and utilize these resources to enhance your learning
            experience. Whether you're preparing for exams or seeking extra
            practice, this hub is built to support your academic journey. Enjoy
            your time here, and make the most of these valuable resources!
          </p>
        </div>

        {/* Waves with smooth animation */}
        <div className="wave-container">
          <svg
            className="wave wave-left"
            viewBox="0 0 1440 320"
            height="100"
            preserveAspectRatio="none"
          >
            <path
              fill="#05004e"
              fillOpacity="1"
              d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,224C672,224,768,160,864,160C960,160,1056,224,1152,213.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

          <svg
            className="wave wave-right"
            viewBox="0 0 1440 320"
            height="100"
            preserveAspectRatio="none"
          >
            <path
              fill="#05004e"
              fillOpacity="1"
              d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,224C672,224,768,160,864,160C960,160,1056,224,1152,213.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Departments Section */}
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
              <DepartmentButton to="/eng">English Department</DepartmentButton>
              <DepartmentButton to="/urdu">Urdu Department</DepartmentButton>
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
              <DepartmentButton to="/bio">Biology Department</DepartmentButton>
              <DepartmentButton to="/psyc">
                Psychology Department
              </DepartmentButton>
              <DepartmentButton to="/phy">Physics Department</DepartmentButton>
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
  );
};

export default PastPapers;
