import imagegroup from "../../assets/ImageGroup.png"
import bloom from "../../assets/bgBlur/Bloom.png"

export default function IndicatorsSection() {
  return (
    <div className="w-full bg-[#050818] text-white py-20 px-6 md:px-16 relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="relative w-[95%] m-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div>
          {/* <div className="flex items-center gap-6 mb-4 mt-5">
            <span className="w-2 h-2 bg-[#5D6BFF] rounded-full"></span>
            <p className="text-sm tracking-widest uppercase text-gray-300">
              Indicators
            </p>
            <span className="w-2 h-2 bg-[#5D6BFF] rounded-full"></span>
          </div> */}
          
        <div className="flex items-center gap-6 mb-4 mt-5">
          <div className="flex items-center">
            <div className="w-14 h-[2px] bg-[#4F60FA] opacity-40 rounded-l-[50%]"></div>
            <div className="w-2 h-2 bg-[#4F60FA] rounded-full"></div>
          </div>
          <p className="text-[18px] sm:text-[17px] md:text-[15px] text-[#959EFE] font-medium">
            Indicators
          </p>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#4F60FA] rounded-full"></div>
            <div className="w-14 h-[2px] bg-[#4F60FA] opacity-40 rounded-r-[50%]"></div>
          </div>
        </div>

          <h1 className="text-4xl md:text-4xl font-bold leading-tight my-12">
            Security & Transparency
          </h1>

          <div className="mt-10 bg-[#0A0F2B]/50 border border-[#1C244B] backdrop-blur-xl 
          rounded-2xl px-6 py-4 flex items-center gap-4 max-w-md">
            
            <div className="flex -space-x-3">
              <img src={imagegroup} className="w-20 h-10 rounded-full border border-[#0A0F2B]" />
            </div>

            <div>
              <p className="text-lg font-semibold flex items-center gap-2">
                4.9/5 
                <span className="text-yellow-400 tracking-[5px] text-2xl">★★★★★</span>
              </p>
              <p className="text-gray-400 text-xs mt-4">Based on 24 reviews on Clutch</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 pt-6">

          <img src={bloom} alt="blur background" className=" absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2  opacity-80 -z-10" />

          {/* 1 */}
          <div className="z-1 m-auto">
            <h2 className="text-4xl md:text-7xl font-normal text-[#6B6BFF] sm:text-start text-center">$2.5B+</h2>
            <p className="text-gray-300 mt-2 sm:text-2xl tracking-[1px]">Total Volume Swapped</p>
          </div>

          {/* 2 */}
          <div className="z-1 m-auto">
            <h2 className="text-4xl md:text-7xl font-normal text-[#B57BFF] sm:text-start text-center">500K+</h2>
            <p className="text-gray-300 mt-2 sm:text-2xl tracking-[1px]">Users Secured</p>
          </div>

          {/* 3 */}
          <div className="z-1 m-auto">
            <h2 className="text-4xl md:text-7xl font-normal text-[#B57BFF] sm:text-start text-center">21.9M+</h2>
            <p className="text-gray-300 mt-2 sm:text-2xl tracking-[1px]">Transactions recorded</p>
          </div>

          {/* 4 */}
          <div className="z-1 m-auto">
            <h2 className="text-4xl md:text-7xl font-normal text-[#FF75D8] sm:text-start text-center">100%</h2>
            <p className="text-gray-300 mt-2 sm:text-2xl tracking-[1px]">Contracts Audited</p>
          </div>
        </div>
      </div>
    </div>
  );
}
