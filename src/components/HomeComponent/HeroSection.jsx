import benefits01 from "../../assets/benefits01.png";
import bb from "../../assets/BottomBorder.png";
import bloom from "../../assets/bgBlur/Bloom (1).png"

export default function HeroSection() {
  return (
    <div className="w-full sm:min-h-screen bg-[#050818] text-white flex items-center justify-center px-6 relative lg:overflow-visible overflow-hidden">
      <img
        src={benefits01}
        alt="background image"
        className="absolute bottom-0 left-0 opacity-50 rotate-180"
      />
      <img
        src={bb}
        alt="background image"
        className="absolute bottom-0  opacity-50 rotate-180"
      />


       <img src={bloom} alt="blur image" className=" sm:h-[70%]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%]  opacity-80" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight md:leading-[1.2]">
          Make your Productivity more
          <br />
          <span className="text-white">efficient. From this time.</span>
        </h1>

        <p className="mt-6 text-gray-300 text-base md:text-lg max-w-xl">
          Get the Demo and unplash your productivity. Feel Free to get the
          latest technology. Have a good time.
        </p>

        <button className="mt-10  bg-gradient-to-b from-[#4F1AD6] to-[#8059E3] shadow-[0px_1px_10px_#3c1896] hover:opacity-90 transition text-white px-10 py-3 rounded-full text-lg font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
}
