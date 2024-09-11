import React, { useState } from 'react';
import axios from 'axios';
// import './ForgotPassword.css';  // Ensure to import the CSS file if you have one

const ForgotPassword = ({ closeModal }) => {  // Added closeModal as a prop
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');  // Added error state

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/forgot-password', { email });

            alert('Check your email for the reset link');
            if (closeModal) closeModal();  // Close modal if prop is provided
        } catch (err) {
            setError(err.response?.data?.msg || 'Error sending reset link');  // Display server error message
        }
    };

    return (
        <div className="form">
            <span className="close-btn" onClick={closeModal}>×</span>  {/* Use closeModal prop */}
            <h1 id="heading">Forgot Password</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit" className="button1">Send Reset Link</button>
                {error && <p className="error-message">{error}</p>}  {/* Display error message */}
            </form>
        </div>
    );
};

export default ForgotPassword;
