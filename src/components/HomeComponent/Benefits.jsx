import benefits01 from "../../assets/benefits01.png";
import BenefitsCard from "./BenefitsCard";
import benefits02 from "../../assets/benefits02.png";
import benefits03 from "../../assets/benefits03.png";
import scannner from "../../assets/scanner.png";
import dots from "../../assets/dots.png";
// import currencyBorder from '../assets/currencyBorder.png'
import solana from "../../assets/Solana (SOL).png";
import coin from "../../assets/Coin Logo.png";
import { ImArrowRight } from "react-icons/im";
import { SlArrowDown } from "react-icons/sl";
// import line from "../assets/icons/Line.png"

const Benefits = ({ activeStep }) => {
  const stepContent = {
    1: {
      heading: "Choose a currency pair",
      para: "Select currencies you want to swap and click the exchange button",
      button: "Exchange"
    },
    2: {
      heading: "Enter the recipient’s address",
      para: "The currency you want to receive will the sent to this address after the exchange",
      button: "Confirm"
    },
    3: {
      heading: "Choose a currency pair",
      para: "To continue, send the indicated amount of coins to the deposit address",
      button: "Confirm & Send"
    },
  };
  return (
    <>
      <div className=" bg-[#00031C] mt-[5%] relative ">
        <img
          src={benefits01}
          alt=""
          className="absolute top-0 left-0 opacity-50"
        />
        {/* <h1 className="text-[18px] pt-[8%]  text-[#959EFE] text-center   z-10 ">
          How it Works
        </h1> */}

        <div className="flex items-center justify-center gap-5 pt-16 sm:pt-20 md:pt-[7%] mb-8">
          <div className="flex items-center">
            <div className="w-14 h-[2px] bg-[#4F60FA] opacity-40 rounded-l-[50%]"></div>
            <div className="w-2 h-2 bg-[#4F60FA] rounded-full"></div>
          </div>
          <p className="text-[18px] sm:text-[17px] md:text-[15px] text-[#959EFE] font-medium">
            How it Works
          </p>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#4F60FA] rounded-full"></div>
            <div className="w-14 h-[2px] bg-[#4F60FA] opacity-40 rounded-r-[50%]"></div>
          </div>
        </div>
        <h1 className="text-[45px] tracking-[1px] mt-[1%] text-[#959EFE] text-center font-[500] text-white   z-10 ">
          Your Benefits
        </h1>
        <BenefitsCard />
      </div>

      {/* how to use - next session */}
      <div className="relative bg-[#00031C] w-full overflow-hidden">
        <img
          src={benefits02}
          alt=""
          className="absolute top-0 left-0 opacity-70 w-full h-auto"
        />
        <img
          src={dots}
          alt=""
          className="absolute top-0 left-0 opacity-70 w-full h-auto"
        />
        {/* <h1 className="text-[16px] lg:mt-[0px] mt-[23px] sm:text-[18px] md:text-[20px]pt-16 sm:pt-20 md:pt-[8%] text-[#959EFE] text-center relative z-10"
        > How it Works</h1> */}
        {/* <div className="flex gap-6 mb-4 text-[#959EFE] pt-16 sm:pt-20 md:pt-[7%] items-center justify-center">
            <div><img src={line} alt="" /> <span className="w-2 h-2 bg-[#5D6BFF] rounded-full"></span></div>
            <p className="text-[16px] sm:text-[15px] md:text-[17px] text-[#959EFE] text-center relative z-10">
              How it Works
            </p>
            <span className="w-2 h-2 bg-[#5D6BFF] rounded-full"></span>
          </div> */}
        <div className="flex items-center justify-center gap-5 pt-16 sm:pt-20 md:pt-[7%] mb-8">
          <div className="flex items-center">
            <div className="w-14 h-[2px] bg-[#4F60FA] opacity-40 rounded-l-[50%]"></div>
            <div className="w-2 h-2 bg-[#4F60FA] rounded-full"></div>
          </div>
          <p className="text-[18px] sm:text-[17px] md:text-[15px] text-[#959EFE] font-medium">
            How it Works
          </p>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#4F60FA] rounded-full"></div>
            <div className="w-14 h-[2px] bg-[#4F60FA] opacity-40 rounded-r-[50%]"></div>
          </div>
        </div>

        <h1 className="text-[32px] sm:text-[40px] md:text-[55px]   mt-2 sm:mt-3 md:mt-[1%]   text-white font-medium text-center relative z-10 ">
          Easy to Use
        </h1>
        {/* <div className="lg:w-[100%]  flex items-center"> */}
        <p className="  text-[14px] sm:text-[16px] md:text-[18px] lg:text-[15px]  mt-3 sm:mt-4 md:mt-[1%]  text-center text-white  px-4 sm:px-8 md:px-0   relative z-10  lg:pb-[8%]">
          Get started in minutes and take full control of your digital assets.{" "}
          <br />
          From signup to secure trading, everything is built for speed and
          clarity.
        </p>

        {/* </div> */}
      </div>

      {/* next-sesstion */}

      <div className="relative w-full bg-[#00031C] lg:py-10 sm-p-0 px-4">
        {/* <img src={currencyBorder} alt="black_border" className="m-auto" />
      <img src={benefits03} alt="benifits_03" className="absolute top-0 left-0 w-full lg:h-[500px]  " /> */}
        <div className="relative w-full sm:h-[500px] h-[300px]">
          <div className=" lg:w-[85%] sm-w[100%] lg:h-[500px] m-auto relative bg-black box-content rounded-[5px]">
            {/* <div className=""></div> */}
            <img
              src={benefits03}
              alt="benefits_03"
              className="absolute w-[98%] h-[97%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[5px] border border-[1px] border-[#00031c]"
            />
            {/* <img src={currencyBorder} alt="black_border" className="m-auto" /> */}

            {/* card */}

            <div className="m-auto">
              <div className="absolute lg:bottom-0 sm-top-0 left-1/2 -translate-x-1/2 -translate-y-[2%] lg:max-w-[48%] w-full md:mt-5 mt-10 mx-auto bg-[#040825] backdrop-blur-xl  rounded-2xl md:p-5 p-2 sm:p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-normal sm:font-semibold sm:tracking-[1px]">
                  {stepContent[activeStep].heading}
                </h2>
                <p className="text-gray-400 mt-3 lg:text-[19px] sm:text-base lg:mb-[7%] ">
                  {stepContent[activeStep].para}
                </p>
                <div className="flex justify-center">

                  {activeStep === 1 && (
                    /*  1 */
                    <div className="flex flex-row sm:flex-row items-center justify-between gap-4 mt-8 lg:w-[70%] sm-w[100%]">
                      <div
                        className="flex items-center gap-2 px-4 py-3 rounded-xl 
        border border-[#7B7B7B] w-full sm:w-auto cursor-pointer"
                      >
                        <img src={solana} alt="link" className="sm:w-7 sm:h-7 w-3 h-3" />
                        <span className="sm:text-sm text-sm lg:mx-2">LINK</span>
                        <span className="text-gray-400 sm:text-sm text-xs font-semibold">
                          <SlArrowDown />
                        </span>
                      </div>

                      <span className="sm:text-[25px] text-[#4B57DA]">
                        <ImArrowRight />
                      </span>

                      <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[#7B7B7B] w-full sm:w-auto cursor-pointer">
                        <img src={coin} alt="hbar" className="sm:w-7 sm:h-7 w-3 h-3" />
                        <span className="sm:text-sm text-sm lg:mx-2">HBAR</span>
                        <span className="text-gray-400 lg:text-sm text-xs">
                          <SlArrowDown />
                        </span>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    /*  2 */
                    <div className="flex flex-row sm:flex-row items-center justify-between gap-4 mt-8 lg:w-[70%] sm-w[100%]">
                      <input
                        type="text"
                        placeholder="Wallet Address..."
                        className="placeholder:text-lg placeholder-white-500 w-full mt-1.5 p-2.5 rounded-md bg-[#040825] text-white focus:outline-purple-500 outline-none border border-gray-400"
                      />
                    </div>
                  )}

                  {activeStep === 3 && (
                    /*  3 */
                    <div className="flex justify-center flex-col items-center">
                      <div className="flex flex-row sm:flex-row items-center justify-between gap-4 mt-8 lg:w-[70%] sm-w[100%]">
                        <div
                          className="flex items-center gap-2 px-4 py-3 rounded-xl 
        border border-[#7B7B7B] w-full sm:w-auto cursor-pointer"
                        >
                          <img src={solana} alt="link" className="sm:w-7 sm:h-7 w-3 h-3" />
                          <span className="sm:text-sm text-sm lg:mx-2">LINK</span>
                          <span className="text-gray-400 sm:text-sm text-xs font-semibold">
                            <SlArrowDown />
                          </span>
                        </div>

                        <span className="sm:text-[25px] text-[#4B57DA]">
                          <ImArrowRight />
                        </span>

                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[#7B7B7B] w-full sm:w-auto cursor-pointer">
                          <img src={coin} alt="hbar" className="sm:w-7 sm:h-7 w-3 h-3" />
                          <span className="sm:text-sm text-sm lg:mx-2">HBAR</span>
                          <span className="text-gray-400 lg:text-sm text-xs">
                            <SlArrowDown />
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-col  gap-4 mt-8 lg:w-[100%] sm-w[100%]">
                        <h1 className="font-normal text-xl">Deposit Address</h1>
                        <div className="flex flex-row justify-between border-gray-500 bg-[#121832] border rounded p-3">
                          <img src={scannner} alt="scanner" className="bg-white w-9 h-9" />
                          <span className="text-[14px]  break-all w-[60%]">0z67.....987asdyasdkjasdhakjshbdahdajsdnashdoaidh09as....433df</span>
                          <button className="bg-gradient-to-b from-[#4F1AD6] to-[#8059E3] shadow-[0px_1px_10px_#3c1896] px-4 py-3 rounded-xl text-xs hover:opacity-90 transition">Copy Address</button>
                        </div>
                      </div></div>
                  )}

                </div>
                <div className="w-full flex justify-center my-2 w-full">
                  <button className="lg:w-[38%] sm:w-[100%] w-80% px-2 mt-10 bg-gradient-to-b from-[#4F1AD6] to-[#8059E3] shadow-[0px_1px_10px_#3c1896] py-3 rounded-xl text-lg  hover:opacity-90 transition">
                    {stepContent[activeStep].button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
