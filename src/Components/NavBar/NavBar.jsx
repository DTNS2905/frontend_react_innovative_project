import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import './NavBar.css'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>


            {/* Full Navigation Bar for laptop and PC */}
            <div className="desktop-navbar hidden md:flex justify-between items-center p-[3rem]">
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-blueColor">
                        <strong>Rent</strong>Yoga
                    </h1>

                </div>
                {/* Hamburger Menu for mobile and tablet */}
                <div className="menu-toggle">
                    <HamburgerMenu
                        isOpen={isOpen}
                        menuClicked={toggleMenu}
                        width={30}
                        height={20}
                        strokeWidth={3}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </div>
                <div className="menu">
                    <ul className="menuListContainer flex gap-8">
                        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Room</li>
                        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Weather</li>
                        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
                    </ul>
                </div>
            </div>

            {/* Mobile and Tablet Menu */}
            <div className={`menu ${isOpen ? 'open' : ''} md:hidden`}>
                <ul className="menuListContainer flex flex-wrap gap-8">
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Room</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
