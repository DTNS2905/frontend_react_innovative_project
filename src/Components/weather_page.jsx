// src/Pages/WeatherPage.js
import React, { useState } from 'react';
import axios from 'axios';
import Weather from '../Components/Weather';
import { motion } from 'framer-motion';
import '../Assets/css/App.css';

function WeatherPage() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);

    const API_KEY = 'dd0dd40b74101ef3502b683b6b46e1f1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            setLoading(true);
            axios.get(url)
                .then((response) => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching weather data:", error);
                    setLoading(false);
                });
            setLocation("");
        }
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-blue-600">
            <motion.div
                className='text-center p-4'
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            >
                <input
                    type='text'
                    className='py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md'
                    placeholder='Enter location'
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyDownCapture={searchLocation}
                />
            </motion.div>
            {loading ? (
                <div className="text-white text-lg">Loading...</div>
            ) : (
                <Weather weatherData={data} />
            )}
        </div>
    );
}

export default WeatherPage;
