import React, { useState } from 'react';
import { Constants } from "../Constants/Constansts.jsx";
import "../Assets/css/newLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();  // Hook to navigate programmatically

    const login = async (username, password) => {
        try {
            const response = await axios.post(
                `${Constants.API_URL}${Constants.API_ENDPOINTS.AUTH.TOKEN}`,
                {
                    username,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const { access, refresh } = response.data;
            sessionStorage.setItem('atoken', access);
            sessionStorage.setItem('rtoken', refresh);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await login(username, password);
            console.log('Login successful:', response);
            navigate('/home');  // Navigate to home page on successful login
        } catch (error) {
            if (error.includes("invalid credentials")) {
                setError("Invalid username or password.");
            } else if (error.includes("user not found")) {
                setError("User not found.");
            } else {
                setError("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default NewLogin;
