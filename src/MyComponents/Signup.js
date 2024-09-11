import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "", // Confirm password field
    address: "",
    programOfStudy: "",
    studentId: "",
    gender: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(true);
  // Removed captchaVerified state

  const navigate = useNavigate();
  const { name, email, password, confirmPassword, address, programOfStudy, studentId, gender } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);  // Log the form data

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
        console.error(err.response?.data?.msg || 'Signup failed');  // Log the error message
        alert(err.response?.data?.msg || "Signup failed");
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      {isFormVisible && (
        <form className="form" onSubmit={onSubmit}>
          <h1 id="heading">Signup</h1>
          <span onClick={toggleFormVisibility}>×</span> {/* Cross icon */}

          <div className="form-row">
            <div className="field">
              <input
                placeholder="Name"
                className="input-field"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
            </div>
            <div className="field">
              <input
                placeholder="Email"
                className="input-field"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <input
                placeholder="Address"
                className="input-field"
                type="text"
                name="address"
                value={address}
                onChange={onChange}
                required
              />
            </div>
            <div className="field">
              <input
                placeholder="Program of Study"
                className="input-field"
                type="text"
                name="programOfStudy"
                value={programOfStudy}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <input
                placeholder="Student ID"
                className="input-field"
                type="text"
                name="studentId"
                value={studentId}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <input
                placeholder="Password"
                className="input-field"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <div className="field">
              <input
                placeholder="Confirm Password"
                className="input-field"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <select
              className="input-field"
              name="gender"
              value={gender}
              onChange={onChange}
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="btn">
            <button type="submit" className="button1">Signup</button>
          </div>
        </form>
      )}
    </>
  );
};

export default Signup;
