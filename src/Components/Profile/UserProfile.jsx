// src/UserProfile.js
import React from 'react';
import { motion } from 'framer-motion';

const UserProfile = () => {
    return (
        <motion.div
            className="max-w-sm mx-auto mt-10 mb-10 p-6 bg-white rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.img
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                className="w-32 h-32 rounded-full mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
            />
            <motion.h2
                className="text-2xl font-bold mb-2"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                John Doe
            </motion.h2>
            <motion.p
                className="text-gray-600 mb-4"
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                Web Developer and Designer
            </motion.p>
            <motion.div
                className="flex justify-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <a href="https://twitter.com" className="text-blue-500 hover:underline">Twitter</a>
                <a href="https://linkedin.com" className="text-blue-500 hover:underline">LinkedIn</a>
                <a href="https://github.com" className="text-blue-500 hover:underline">GitHub</a>
            </motion.div>
        </motion.div>
    );
}

export default UserProfile;
