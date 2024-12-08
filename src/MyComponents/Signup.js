// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "", // Confirm password field
//     address: "",
//     programOfStudy: "",
//     studentId: "",
//     gender: "",
//   });

//   const [isFormVisible, setIsFormVisible] = useState(true);
//   // Removed captchaVerified state

//   const navigate = useNavigate();
//   const { name, email, password, confirmPassword, address, programOfStudy, studentId, gender } = formData;

//   const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);  // Log the form data

//     if (password !== confirmPassword) {
//         alert("Passwords do not match");
//         return;
//     }

//     try {
//         const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
//         localStorage.setItem("token", res.data.token);
//         alert("Signup successful");
//         navigate("/login");
//     } catch (err) {
//         console.error(err.response?.data?.msg || 'Signup failed');  // Log the error message
//         alert(err.response?.data?.msg || "Signup failed");
//     }
//   };

//   const toggleFormVisibility = () => {
//     setIsFormVisible(!isFormVisible);
//   };

//   return (
//     <>
//       {isFormVisible && (
//         <form className="form" onSubmit={onSubmit}>
//           <h1 id="heading">Signup</h1>
//           <span onClick={toggleFormVisibility}>×</span> {/* Cross icon */}

//           <div className="form-row">
//             <div className="field">
//               <input
//                 placeholder="Name"
//                 className="input-field"
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={onChange}
//                 required
//               />
//             </div>
//             <div className="field">
//               <input
//                 placeholder="Email"
//                 className="input-field"
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={onChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="field">
//               <input
//                 placeholder="Address"
//                 className="input-field"
//                 type="text"
//                 name="address"
//                 value={address}
//                 onChange={onChange}
//                 required
//               />
//             </div>
//             <div className="field">
//               <input
//                 placeholder="Program of Study"
//                 className="input-field"
//                 type="text"
//                 name="programOfStudy"
//                 value={programOfStudy}
//                 onChange={onChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="field">
//               <input
//                 placeholder="Student ID"
//                 className="input-field"
//                 type="text"
//                 name="studentId"
//                 value={studentId}
//                 onChange={onChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="field">
//               <input
//                 placeholder="Password"
//                 className="input-field"
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={onChange}
//                 required
//               />
//             </div>
//             <div className="field">
//               <input
//                 placeholder="Confirm Password"
//                 className="input-field"
//                 type="password"
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={onChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="field">
//             <select
//               className="input-field"
//               name="gender"
//               value={gender}
//               onChange={onChange}
//               required
//             >
//               <option value="" disabled>
//                 Select Gender
//               </option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="btn">
//             <button type="submit" className="button1">Signup</button>
//           </div>
//         </form>
//       )}
//     </>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    programOfStudy: "",
    studentId: "",
    gender: "",
  });

  const [isVisible, setIsVisible] = useState(true); // State to toggle form visibility

  const navigate = useNavigate();
  const { name, email, password, confirmPassword, address, programOfStudy, studentId, gender } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      localStorage.setItem("token", res.data.token);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  // Function to close the form
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // If form is not visible, render nothing
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow p-4 position-relative"
        style={{
          width: "80%",
          maxWidth: "900px",
          borderRadius: "15px",
          background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        }}
      >
        {/* Close button */}
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={handleClose}
          aria-label="Close"
        ></button>

        <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#444" }}>Signup</h2>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={name} onChange={onChange} required />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={onChange} required />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" name="address" value={address} onChange={onChange} required />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="programOfStudy" className="form-label">Program of Study</label>
              <input type="text" className="form-control" id="programOfStudy" name="programOfStudy" value={programOfStudy} onChange={onChange} required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="studentId" className="form-label">Student ID</label>
              <input type="text" className="form-control" id="studentId" name="studentId" value={studentId} onChange={onChange} required />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select className="form-select" id="gender" name="gender" value={gender} onChange={onChange} required>
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            style={{ padding: "10px", fontSize: "16px", fontWeight: "bold" }}
          >
            Signup
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
