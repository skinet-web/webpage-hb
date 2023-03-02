import { React, useState } from "react";
import { fintech } from "../assets";
import { priceList } from "../constants";

const Popup = ({ buttonClick }) => {
  const [checkedId, setCheckedId] = useState(null);

  function handleCheckboxChange(event) {
    const id = event.target.value;
    console.log(checkedId);
    if (checkedId !== id) {
      setCheckedId(id);
    } else {
      setCheckedId(null);
    }
  }

  return (
    <div className="flex flex-col bg-white m-7 rounded-3xl shadow-2xl shadow-[#3829e0]/20 overflow-hidden absolute top-[50px] z-10">
      <img src={fintech} className="w-full sm:w-[27rem]" alt="background-img" />
      <div className="flex flex-col sm:w-[27rem] items-center px-7 sm:px-10 pt-8 pb-9">
        <h1 className="font-poppins font-black text-2xl text-[#1f2f56]">
          Order Summary
        </h1>
        <p className="font-poppins font-medium text-base text-center text-[#7280a7] px-3 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
          suscipit tellus sit amet semper. Proin rhoncus dui ac ex volutpat, eu
          varius arcu rhoncus.{" "}
        </p>
        <div className="flex w-full items-center justify-center bg-[#f5f7ff] rounded-xl py-4 px-4 mt-6">
          <div className="flex space-x-5">
            <div className="flex flex-col">
              <h2 className="font-poppins font-black text-base text-[#1f2f56]">
                Annual Plan
              </h2>
              {/* <span className="font-poppins font-medium text-base text-[#7280a7]">$59.99/year</span> */}
              <span className="font-poppins font-medium text-base text-[#7280a7]">
                {priceList.map((price) => (
                  <ul key={price.id}>
                    <input
                      type="checkbox"
                      value={price.id}
                      checked={price.id === checkedId}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2">{price.price}$/year</span>
                  </ul>
                ))}
              </span>
            </div>
          </div>
          {/* <a className="font-poppins font-bold text-base text-[#3829e0] sm:hover:text-[#3829e0]/50 
                    sm:hover:no-underline active:text-[#3829e0]/50 active:no-underline underline" href="#">Change</a> */}
        </div>
        <button
          onClick={buttonClick}
          className="w-full font-poppins font-black text-base bg-[darkblue] sm:hover:bg-[#3829e0]/50 
                active:bg-[#3829e0]/50 text-white shadow-lg shadow-[#3829e0]/30 rounded-xl py-4 mt-6"
        >
          Proceed to Payment
        </button>
        <button
          onClick={buttonClick}
          className="font-poppins font-black text-base text-[#7280a7] sm:hover:text-[#1f2f56] active:text-[#1f2f56] mt-6"
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default Popup;
