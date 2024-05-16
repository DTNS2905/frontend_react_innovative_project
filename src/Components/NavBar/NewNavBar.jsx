import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const NewNavbar = () => {
    return (
        <nav className="bg-blueColor py-4 mb-16">
            <div className="container mx-auto flex justify-between items-center">
                <div className="">
                    <div className="logoDiv ">
                        <h1 className="logo text-[25px] text-white">
                            <strong>Rent</strong>Yoga
                        </h1>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Link to="/" className="text-white mx-4 hover:text-gray-300">
                        Home
                    </Link>
                    <Link to="/chat" className="text-white mx-4 hover:text-gray-300">
                        Chat
                    </Link>
                    <Link to="/weather" className="text-white mx-4 hover:text-gray-300">
                        Weather
                    </Link>
                    <Link to="/booking" className="text-white mx-4 hover:text-gray-300">
                        Room
                    </Link>
                </div>
                {/* Mobile Menu (Hamburger icon) */}
                <div className="md:hidden">
                    <button className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NewNavbar;
