

import SwapCard from "./SwapCard";
import usdtLogo from "../../assets/usdtLogo.png";
import AvaxLogo from "../../assets/AvaxLogo.png";
// import { ImArrowUp } from "react-icons/im";
// import { FaArrowUp, FaArrowDown } from "react-icons/fa";
// import arrow from "../assets/icons/arrow.png"
import { BsFuelPumpFill } from "react-icons/bs";
import sq from "../../assets/bgBlur/Group 4.png"

const Banner = () => {
  return (
    <div className="mt-16 px-4 md:px-8">
      <h1 className="text-4xl lg:mt-[6%] lg:mb-[2%] sm:text-5xl md:text-6xl lg:text-[87px] mb-6 leading-snug font-medium bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center">
        Your Gateway <br />to Instant Swap
      </h1>
      <div className="relative flex flex-col justify-center items-center">
      <SwapCard
        title="You Give"
        amount="348.58"
        tokenIcon={usdtLogo}
        tokenSymbol="USDT"
        bottomLeftValue="348.68"
        bottomRightValue="2454.65"
        className="bg-[#000214]"
      />

      <div className="flex justify-center text-white absolute w-full w-full max-w-[20rem]  lg:max-w-auto mx-auto z-30">

         <div className="flex items-center space-y-1 text-black">
          {/* <img src={arrow} alt="" /> */}
          <img src={sq} alt="swap" className="cursor-pointer w-[67%] md:w-full" />
         </div>
      </div>
       
      <SwapCard
        title="You Get"
        tokenIcon={AvaxLogo}
        tokenSymbol="USDT"
        bottomLeftValue="2454.65"
        bottomRightValue="348.68"
        className="bg-gradient-to-b from-[#1A2C7699] to-[#000421]"
      />

      </div> 

      <div className="flex flex-col items-center mt-8 text-white space-y-4 ">
        <div className="flex   sm:flex-row sm:justify-between w-[100%] sm:w-3/4 lg:w-[38%] text-center flex flex-row justify-between items-start">
          <p className="text-xs sm:text-lg md:text-xl mb-2 sm:mb-0">1 ETH = 3200.98 USDT ($3208.38)</p>
          <p className="text-xs sm:text-lg md:text-xl items-center flex gap-2"><BsFuelPumpFill /> $346.43</p>
        </div>

        <div className="w-full sm:w-3/4 lg:w-[38%]">
          <button className="w-full lg:w-[100%] md:p-4 p-2  sm:pt-4 sm:pb-4 mt-4 bg-gradient-to-b from-[#4F1AD6] to-[#8059E3] rounded-lg border border-[#ffffffdb] text-base sm:text-lg">
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;


