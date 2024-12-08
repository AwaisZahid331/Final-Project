// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import ForgotPassword from './ForgotPassword'; // Import the ForgotPassword component

// const Login = ({ closeModal }) => {
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const [showForgotPassword, setShowForgotPassword] = useState(false); // State to toggle forgot password view
//     const navigate = useNavigate();

//     const { email, password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//             localStorage.setItem('token', res.data.token);
//             alert('Login successful');
//             navigate('/home');  // Redirect to home page
//         } catch (err) {
//             alert('Login failed');
//         }
//     };

//     const toggleForgotPassword = () => {
//         setShowForgotPassword(!showForgotPassword); // Toggle forgot password view
//     };

//     return (
//         <div>
//             {showForgotPassword ? (
//                 <ForgotPassword /> // Render ForgotPassword component
//             ) : (
//                 <form className="form" onSubmit={onSubmit}>
//                     <h1 id="heading">Login</h1>
//                     <span onClick={closeModal} >×</span>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Username"
//                         className="input-field"
//                         value={email}
//                         onChange={onChange}
//                         required
//                     />
//                     <div className="field">
//                         <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" >
//                             <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
//                         </svg>
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             className="input-field"
//                             value={password}
//                             onChange={onChange}
//                             required
//                         />
//                     </div>
//                     <div className="btn">
//                         <button type="submit" className="button11">
//                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         </button>
//                     </div>
//                     <button type="button" className="button3" onClick={toggleForgotPassword}>
//                         Forgot Password
//                     </button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({onligin}) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/home");
    } catch (err) {
      alert("Login failed");
    }
  };

  
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{
          width: "80%",
          maxWidth: "500px",
          borderRadius: "15px",
          background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        }}
      >
        <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#444" }}>Login</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            style={{ padding: "10px", fontSize: "16px", fontWeight: "bold" }}
          >
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
