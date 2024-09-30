import React from 'react'
import location from "../../assets/images/locationEdit.svg";

function DisplaySection({selectScooter, isImageVisible}) {
  const formatAmount = (amount) =>
    amount
      ? new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        }).format(amount)
      : "₹0.00";

 
  return (
    <div className="bg-white lg:col-span-5 col-span-11 lg:px-16 md:px-10 px-5 lg:py-16 md:py-13 py-11">
    <div className="flex flex-col md:gap-x-8 gap-y-8">
      <div className="flex justify-between">
        <div className="md:text-[25px] text-[22px]  font-semibold text-black w-fit">
          Storie
        </div>
        <div className="flex gap-4 ml-auto">
          <div
            className={`lg:h-9 md:h-7 h-5 lg:w-9 md:w-7 w-5 my-auto  ring-1 ring-[#E4E4E4] rounded-full`}
            style={{ background: selectScooter?.color }}
          />
          <div className="md:text-sm text-xs whitespace-nowrap text-black my-auto">
            Sparkling Green
          </div>
        </div>
      </div>
      <div className="col-span-2 border border-[#00000033]" />
      <div className="col-span-2 mx-auto md:mt-20 mt-8 ">
      <img
          src={selectScooter?.image}
          alt={selectScooter?.name}
          className={`w-full md:h-auto h-[300px] transition-opacity duration-300 ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="col-span-2 border border-[#00000033]" />
      <div className="flex justify-between">
        <div className="flex flex-col gap-5 w-fit">
          <div className="text-[10px] text-[#000000E5]">Booking Amount</div>
          <div className="lg:text-[40px] md:text-3xl text-xl font-semibold leading-[50px]">
            {formatAmount("2500")}/-
          </div>
        </div>
        <div className="flex flex-col gap-2.5 ml-auto">
          <div className="flex gap-4 text-[10px] ">
            <div className="flex flex-col">
              <span className="text-black text-opacity-60 ">
                *Ex-showroom price in
              </span>
              <span className="text-black text-opacity-30 ">
                (incl. FAME II Subsidy )
              </span>
            </div>
            <div className="flex h-fit">
              <select
                name="location"
                id="location"
                className="focus:outline-none select h-fit my-auto"
              >
                <option value="New Delhi">New Delhi</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Banglore">Banglore</option>
              </select>
              <label htmlFor="location" className="w-4 h-5">
                <img src={location} alt="" className="w-4 h-5" />
              </label>
            </div>
          </div>
          <div className="text-[22px]">{formatAmount(117357)}/-</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DisplaySection
