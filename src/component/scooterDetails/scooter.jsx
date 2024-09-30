import React, { useState } from "react";
import ScooterDetails from "./scooterDetails";
import { ScooterData } from "../../data/scooterData";
import DisplaySection from "./displaySection";

function Scooter() {
  const [selectScooter, setSelectScooter] = useState(ScooterData[0]);
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleColorChange = (scooter) => {
    setIsImageVisible(false); // Start fading out the image
    setTimeout(() => {
      setSelectScooter(scooter); // Update the image after fade out
      setIsImageVisible(true); // Fade the image back in
    }, 300); // Duration matches the CSS transition
  };
  return (
    <div className="bg-[#F4F4F4] grid grid-cols-11">
      <DisplaySection selectScooter={selectScooter} isImageVisible={isImageVisible} />
      <ScooterDetails
        handleColorChange={handleColorChange}
        selectScooter={selectScooter}
      />
    </div>
  );
}

export default Scooter;
