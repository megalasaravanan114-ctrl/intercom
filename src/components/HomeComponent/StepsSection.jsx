import { useState } from "react";
import blur from "../../assets/bgBlur/Blur.png";

const StepsSection = ({activeStep, setActiveStep}) => {
  // const [activeStep, setActiveStep] = useState(1);
  const steps = [
    {
      id: 1,
      title: "Choose a currency pair",
      desc: "Select currencies you want to swap and click the Exchange button.",
    },
    {
      id: 2,
      title: "Enter the recipient’s address",
      desc: "The currency you want to receive will be sent to this address after the exchange.",
    },
    {
      id: 3,
      title: "Choose a currency pair",
      desc: "To continue, send the indicated amount of coins to the deposit address.",
    },
  ];

  return (
    <div className="w-full bg-[#06091C] lg:pb-5 md-p-0">
      <div className="w-[90%] m-auto px-4 md:px-10 py-12 text-white">
        <div className="w-full  mb-5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 relative  ">
          {/* <img src={blur} alt="blur"  className="absolute top-0 left-[-5%]" /> */}

          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`border-t-[3px] pt-16 relative cursor-pointer ${
                activeStep === step.id
                  ? `border-[#4F60FA] bg-[url('${blur}')] bg-cover bg-center w-full h-64 `
                  : "border-[#45557C]/40"
              }`}
            >
              <div className="w-20 h-20 border-[8px] border-[#271F4E] rounded-full flex items-center justify-center mb-[20%] mx-auto lg:mx-0">
                <div className="w-full h-full rounded-full  bg-gradient-to-r from-[#4F1AD6] vai-[#4F1AD6] vai-[#8059E3] via-[#4F1AD6]  via-[#4F1AD6] to-[#a38eda] flex items-center justify-center">
                  <p className="text-xl font-semibold">{step.id}</p>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold mt-6 tracking-[1px]">
                  {step.title}
                </h3>
                <p className="text-gray-400 mt-5 leading-relaxed max-w-sm lg:w-[80%]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
