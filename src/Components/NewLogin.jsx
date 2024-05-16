import React, { useState } from 'react';
import { Constants } from "../Constants/Constansts.jsx";
import { useNavigate } from "react-router-dom";
import { IoKey } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import api from "../Api/Api.jsx";

const NewLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const login = async (username, password) => {
        try {
            const response = await api.post(
                `${Constants.API_ENDPOINTS.AUTH.TOKEN}`,
                { username, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            const { access, refresh } = response;
            sessionStorage.setItem('atoken', access);
            sessionStorage.setItem('rtoken', refresh);
            return response;
        } catch (error) {
            throw error || 'An unexpected error occurred.';
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await login(username, password);
            console.log('Login successful:', response);
            navigate('/');
        } catch (error) {
            setError(error.message || error);
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle signup logic here
    };

    return (
        <div className="bg-banner-image bg-cover h-screen flex justify-center items-center">
            <div className="lg:w-[450px] bg-white py-2 px-10 rounded-bl-[40px] rounded-se-[40px]">
                <h1 className="text-4xl text-blue-900 text-center mb-6 transition-all">Login</h1>
                <form onSubmit={handleLogin} className="w-full">
                    <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
                        <IoPersonSharp className="text-gray-700 text-xl"/>
                        <input
                            type="text"
                            className="bg-transparent border-black w-full outline-none"
                            placeholder="Your Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
                        <IoKey className="text-gray-700 text-xl"/>
                        <input
                            type="password"
                            className="bg-transparent border-black w-full outline-none"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <div className="flex justify-center gap-8 mt-10">
                        <button
                            type="submit"
                            className="text-xl text-white py-2 w-36 rounded-3xl bg-blue-900"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewLogin;
