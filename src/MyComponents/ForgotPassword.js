// client/src/components/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
            alert('Check your email for the reset link');
        } catch (err) {
            alert('Error sending reset link');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <button type="submit">Send Reset Link</button>
        </form>
    );
};

export default ForgotPassword;
