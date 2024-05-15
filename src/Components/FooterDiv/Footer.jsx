import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer p-[2rem] md:p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-1 md:grid-cols-5 m-auto items-center justify-center">

            <div className="md:col-span-2">
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                        <strong>Rent</strong>Room
                    </h1>
                </div>
                <p className="text-white pb-[13px] opacity-70 leading-7">
                    We always bring everyone more relax and health
                </p>
            </div>

            <div className="grid md:col-span-1">
           <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
               Rent
           </span>

                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">More</li>
                </div>
            </div>

            <div className="grid md:col-span-1">
           <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
               Resources
           </span>

                <div>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Account</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Support Center</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Contact us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">More</li>
                </div>
            </div>

            <div className="grid md:col-span-1">
           <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
               Contact Info
           </span>

                <div>
                    <small className="text-[14px] text-white">
                        rentforyoga@gmail.com
                    </small>
                    <div className="icons flex gap-4 py-[1rem] justify-center">
                        <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor"/>
                        <BsFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor"/>
                        <AiOutlineTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
