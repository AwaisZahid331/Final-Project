import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import "../App.css";
// import LogoutBtn from "./LogoutBtn";

const Navbar = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [popup, setPopup] = useState("");

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const closeModal = () => {
    setShowSignup(false);
    setShowLogin(false);
  };



  const [searchQuery, setSearchQuery] = useState("");
  // const navigate = useNavigate();

  // Mapping of search queries to routes
  const pageRoutes = {
    home: "/home",
    about: "/about",
    "past papers": "/pastpapers",
    contact: "/contact",
    help: "/help",
    "uploaded pdf": "/uploadedPDF",
    login: "/login",
    signup: "/signup",
    "computer science": "/ComSci",
    bba: "/bba",
    biology: "/bio",
    botany: "/botnay",
    chemistry: "/chemistry",
    economics: "/ecnomics",
    physics: "/phy",
    psychology: "/psyc",
    urdu: "/urdu",
    maths: "/maths",
    "islamic studies": "/islamic",
    english: "/eng",
    pastpapers: "/pastpapers",

  };

  // Handle search
  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (pageRoutes[query]) {
      navigate(pageRoutes[query]);
    } else {
      alert("Page not found. Please refine your search.");
    }
  };


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    };
    checkLoginStatus();

    const storageListener = () => checkLoginStatus();
    window.addEventListener("storage", storageListener);

    return () => {
        window.removeEventListener("storage", storageListener);
    };
}, []);

const handleLogout = () => {
    localStorage.removeItem("token");
    // No need to explicitly set setIsLoggedIn(false) here; the event listener will handle it.
    navigate("/login");
};




  return (
    <>
      <header className="py-3 p-fixed">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            {/* Logo Section */}
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <img
                src="https://api.logo.com/api/v2/images?logo=logo_f9ae6ece-63b8-424a-9c61-b100a75b0a18&format=webp&width=2000&background=transparent&fit=contain&quality=100&u=2024-09-25T21%3A12%3A33.016Z"
                alt="Logo"
                style={{ maxWidth: "150px" }}
              />
            </div>

            {/* Search Bar Section */}
            <div className="col-12 col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ height: "44px", borderRadius: "4px" }}
                />
                <button
                  className="btn btn-primary text-white fw-bold"
                  type="button"
                  onClick={handleSearch}
                  style={{
                    backgroundColor: "orange",
                    height: "44px",
                    marginTop: "10px",
                  }}
                >
                  Search
                </button>
              </div>
            </div>

            {/* Social Icons Section */}
            {/* Social Icons Section */}
            <div className="col-12 col-md-2 mt-3 mt-md-0">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="orange"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="red"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="white"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="yellow"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                activeClassName="active"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active"
                style={{ color: "black", fontWeight: "bold" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/pastpapers"
                activeClassName="active"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Exam Archives
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                activeClassName="active"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/help"
                activeClassName="active"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Help
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/uploadedPDF"
                activeClassName="active"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={{ color: "black", fontWeight: "bold" }}
                className="nav-link"
                to="/ResumeBuilder"
                activeClassName="active"
              >
                Resume Building
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {isLoggedIn ? (
            <button
              className="sn btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="sn btn btn-primary mx-2"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
              <button
                className="sn btn btn-secondary"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>

      {/* Modal for Signup */}
      {showSignup && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Signup setPopup={setPopup} closeModal={closeModal} />
          </div>
        </div>
      )}

      {/* Modal for Login */}
      {showLogin && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Login setPopup={setPopup} closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
