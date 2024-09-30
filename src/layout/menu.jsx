import React, { useEffect } from "react";

function Menu({ isOpen, setOpen }) {
  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#000000] transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50 lg:hidden`}
    >
      <div className="flex justify-end p-5">
        <button onClick={() => setOpen(false)} className="text-white text-xl">
          Close
        </button>
      </div>

      {/* Split menu into two sections */}
      <div className="flex flex-col h-full gap-20 pb-10">
        {/* Navigation Links */}
        <nav className="flex flex-col  gap-5 mt-10 text-white">
          <button onClick={() => setOpen(false)}>Storie</button>
          <button onClick={() => setOpen(false)}>Loev</button>
          <button onClick={() => setOpen(false)}>One</button>
          <button onClick={() => setOpen(false)}>Superbike</button>
        </nav>

        {/* Call-to-action Buttons */}
        <nav className="flex flex-col  gap-5 text-white">
          <button onClick={() => setOpen(false)}>Book Now</button>
          <button onClick={() => setOpen(false)}>Book a Test Ride</button>
          <button onClick={() => setOpen(false)}>Become a Dealer</button>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
