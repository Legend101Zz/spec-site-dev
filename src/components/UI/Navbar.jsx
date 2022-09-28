import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "../../assets/logo.png";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div className="mr-0 flex">
          <img className="object-contain h-15 w-40" src={logo} alt="spec" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-[#fff] items-center">
            <li>ABOUT</li>
            <li>EVENTS</li>
            <li>PRIZES</li>
            <li>SPONSERS</li>
            <li>FAQ</li>
            <li>CONTACT US</li>
            <button className="  ml-4 bg-gradient-to-r from-[#6a00ff] via-purple-500 to-[#00d8ff] ... py-3 px-10  rounded-3xl text-white  ">
              Register Now
            </button>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/* Mobile view */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-xl">ABOUT</li>
            <li className="text-xl">EVENTS</li>
            <li className="text-xl">PRIZES</li>
            <li className="text-xl">SPONSERS</li>
            <li className="text-xl">FAQ</li>
            <li className="text-xl">CONTACT US</li>
            <button
              className=" 
            m-8  bg-gradient-to-r from-[#6a00ff] via-purple-500 to-[#00d8ff] ... py-3 px-9   rounded-3xl text-white  "
            >
              Register Now
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
