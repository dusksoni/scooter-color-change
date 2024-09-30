import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { CiMenuFries } from "react-icons/ci";
import Menu from "./menu";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-5 lg:px-20 md:px-10 px-5 bg-[#000000CC] w-full text-white text-sm sticky top-0 z-50">
      {/* Logo and Menu Icon */}
      <div className="flex justify-between items-center w-full lg:w-auto lg:hidden">
        <img src={logo} alt="Logo" className="" />
        <CiMenuFries
          className="text-2xl"
          onClick={() => setOpen(!open)} // Toggle menu open state
        />
      </div>

      {/* Navigation for large screens */}
      <nav className="hidden lg:flex items-center gap-10">
        <img src={logo} alt="Logo" className="hidden lg:block" />
        <button>Storie</button>
        <button>Loev</button>
        <button>One</button>
        <button className="relative">
          <div className="absolute">Superbike</div>
          <div className="relative bottom-2 left-20 bg-[#FAFF00] text-black px-1 text-[10px] rounded-sm ">new</div>
        </button>
      </nav>

      {/* Call-to-action buttons for large screens */}
      <div className="hidden lg:flex items-center gap-10">
        <button>Book Now</button>
        <button>Book a Test Ride</button>
        <button>Become a Dealer</button>
      </div>

      {/* Mobile Menu */}
      <Menu isOpen={open} setOpen={setOpen} />
    </header>
  );
}

export default Header;
