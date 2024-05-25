// src/Components/Weather.js
import React from 'react';
import { motion } from 'framer-motion';

const Weather = ({ weatherData }) => {
  if (!weatherData.weather) return null;

  const getWeatherBackground = (description) => {
    if (description.includes("rain")) return "bg-blue-400";
    if (description.includes("cloud")) return "bg-gray-400";
    if (description.includes("clear")) return "bg-yellow-300";
    return "bg-gray-300";
  };

  const weatherBackground = getWeatherBackground(weatherData.weather[0].description);

  return (
      <motion.div
          className={`w-[500px] h-auto shadow-lg rounded-xl m-auto relative px-6 py-8 top-[10%] ${weatherBackground} transition-all duration-500 ease-in-out`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between w-full">
          <div className="w-1/2 my-4 mx-auto flex flex-col justify-between items-start">
            <div>
              <motion.p
                  className="text-xl font-bold"
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
              >
                {weatherData.name}, {weatherData.sys.country}
              </motion.p>
              <motion.p
                  className="text-sm"
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
              >
                {weatherData.weather[0].description}
              </motion.p>
            </div>
            <motion.h1
                className="text-6xl font-semibold my-4"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              {weatherData.main.temp.toFixed()} ℃
            </motion.h1>
            <div className="text-xs">
              <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                Feels Like: <span className="font-bold">{weatherData.main.feels_like.toFixed()} ℃</span>
              </motion.p>
              <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                Humidity: <span className="font-bold">{weatherData.main.humidity} %</span>
              </motion.p>
              <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                Wind Speed: <span className="font-bold">{weatherData.wind.speed.toFixed()} KPH</span>
              </motion.p>
              <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                Pressure: <span className="font-bold">{weatherData.main.pressure} hPa</span>
              </motion.p>
              <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
                Visibility: <span className="font-bold">{(weatherData.visibility / 1000).toFixed(1)} km</span>
              </motion.p>
              <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                Sunrise: <span className="font-bold">{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</span>
              </motion.p>
              <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.9 }}>
                Sunset: <span className="font-bold">{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</span>
              </motion.p>
            </div>
          </div>
          <motion.div
              className="w-1/2 flex flex-col justify-between items-end"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
          >
            <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="weather icon"
                className="w-[120px] mb-4"
            />
          </motion.div>
        </div>
      </motion.div>
  );
};

export default Weather;
