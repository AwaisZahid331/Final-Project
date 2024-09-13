import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import '../App.css';

const Navbar = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [popup, setPopup] = useState('');

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

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow fixed-top" style={{backgroundColor:"#05004e"}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pastpapers" activeClassName="active">Exam Archives</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/help" activeClassName="active">Help</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/uploadedPDF" activeClassName="active">Resources</NavLink>
              </li>
            </ul>
          </div>
          <div>
            {popup && <div>{popup}</div>}
            <button className="sn" onClick={handleSignupClick}>Sign Up</button>
            <button className="sn" onClick={handleLoginClick}>Login</button>
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
