import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { ScooterData } from "../../data/scooterData";
import { CgArrowLongRight } from "react-icons/cg";

function ScooterDetails({ selectScooter, handleColorChange }) {
  return (
    <div className="lg:px-16 md:px-10 px-5 lg:py-16 md:py-13 py-11 lg:col-span-6 col-span-11 h-full flex flex-col">
      
      <div className="flex gap-10 justify-around mb-10 overflow-x-auto whitespace-nowrap">
        <button className="text-xs font-semibold text-black flex gap-3 ">
          <span>01</span>
          <span>Select model</span>
        </button>
        <button className="text-xs font-semibold text-black flex gap-3">
          <span>02</span>
          <span>Select COLOR</span>
        </button>
        <button className="text-xs font-semibold text-black flex gap-3 text-opacity-30">
          <span>03</span>
          <span>Your Details and preferred location</span>
        </button>
      </div>

      <div className="text-3xl font-semibold mb-8">
        Choose <br />a colour
      </div>

      <div className="bg-white lg:px-16 md:px-10 px-6 py-8 grid grid-cols-2 md:gap-y-16 gap-y-8">
        
        <div className="flex lg:gap-[30px] md:gap-5 gap-2.5 m-auto">
          <IoMdCheckmark className="text-3xl" />
          <div>
            <div className="md:text-2xl text-xl font-semibold">Storie</div>
            <div className="text-sm sm:whitespace-nowrap">
              {selectScooter?.name}
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <img src={selectScooter?.image} alt="" className="md:h-[99px] h-[85px]" />
        </div>

        {/* Color options */}
        <div className="col-span-2 flex justify-around">
          {ScooterData.map((item) => (
            <button
              key={item.id}
              className={`lg:h-8 md:h-7 h-6 lg:w-8 md:w-7 w-6 ${
                item?.id === selectScooter?.id
                  ? "ring-4 ring-inset ring-black" // Highlight selected color
                  : "ring-1 ring-[#E4E4E4]"
              }  rounded-full`}
              style={{ background: item?.color }} 
              onClick={() => handleColorChange(item)} // Trigger color change on click
            ></button>
          ))}
        </div>
      </div>

      <div className="lg:mt-auto mt-10">
        <button className="flex justify-between w-full md:p-6 p-3 items-center bg-black text-xs text-white font-semibold">
          CONFIRM
          <CgArrowLongRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default ScooterDetails;
