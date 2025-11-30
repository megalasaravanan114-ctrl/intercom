import GradientCard from "./GradientCard";
import clock from "../../assets/clock.png";
import img1 from "../../assets/icons/ItemIcon1.png";
import img2 from "../../assets/icons/Item → Icon 2.png";
import img3 from "../../assets/icons/Item → Icon 3.png";
import img4 from "../../assets/icons/Item → Icon 4-1.png";
import img5 from "../../assets/icons/Item → Icon 5-1.png";
import img6 from "../../assets/icons/Item → Icon 6.png";
import img7 from "../../assets/icons/ItemIcon1.png";
import img8 from "../../assets/icons/Item → Icon 2.png";
import img9 from "../../assets/icons/Item → Icon 3.png";
import img10 from "../../assets/icons/Item → Icon 3.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function BenefitsCard() {
  return (
    <div className="text-white  lg:w-[95%] bg-[#050925] m-auto">
      <div className="w-full bg-[#06091C] py-16 text-white">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <GradientCard>
            <h2 className="text-xl font-normal tracking-[1px] lg:mb-[28px]">
              Non-Custodial & Secure
            </h2>
            <p className="mt-3 text-[#CAC9D1] text-[15px] mb-[16%]">
              Your crypto always stays in your wallet — we never hold your
              funds. Every swap runs on audited smart contracts, ensuring
              complete transparency and security.
            </p>
            <div className="md:mt-6 mt-3 mb-5 md:w-[83%] w-[90%] mx-auto">
              <div className="flex justify-between my-4">
                <p className="text-[18px] text-gray-400">Performance</p>
                <div className="flex text-gray-400  font-extralight">
                  <p className="mr-3 font-light">1D</p>
                  <p className="mr-3">1W</p>
                  <p className="mr-3 text-white bg-[#18191D] px-2 rounded-[50px]">
                    1M
                  </p>
                  <p className="">1Y</p>
                </div>
              </div>
              <div className="flex justify-between my-4  text-[15px]">
                <p>0</p>
                <p>100</p>
              </div>
              <div className="flex gap-1 mt-3">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[3%] h-[70px] mr-[12px] rounded-md bg-gradient-to-b from-purple-400 to-purple-700 opacity-70"
                  ></div>
                ))}
              </div>
            </div>
          </GradientCard>

          {/* Card-2 */}
          <GradientCard>
            <h2 className="text-xl font-normal tracking-[1px] lg:mb-[28px]">
              Best Market Rates
            </h2>
            <p className="mt-3 text-[#CAC9D1] text-[15px] mb-[16%] text-[15px] mb-[16%]">
              Our smart engine scans multiple DEXs in real time to get you the
              most favorable swap rate. You’ll always see a clear fee breakdown
              before confirming any transaction.
            </p>
            <div className="md:w-[83%] w-[98%] mx-auto">
              <div className="flex justify-between my-4">
                <p className="text-[16px] text-gray-400">Latest transactions</p>
                <div className="flex text-gray-400  font-extralight">
                  <button className="mr-3 font-light text-[16px]">
                    Show all
                  </button>
                </div>
              </div>
              <div className="mt-3 space-y-3 pb-10">
                <div className="flex justify-between px-4 py-2 bg-[#12121C] rounded-lg py-4  text-[13px]">
                  <p className="text-[#C0B6EF]">0x8L95ABC3D4522C...</p>
                  <p className="text-[#959598] ">Feb 2024</p>
                  <span className="text-[#959598]">$1,352</span>
                </div>
                <div className="flex justify-between px-4 py-2 bg-[#12121C] rounded-lg py-4 text-[13px]">
                  <p className="text-[#C0B6EF] ">0x3D459ABC3D4524...</p>
                  <p className="text-[#959598]">Feb 2025</p>
                  <span className="text-[#959598]">$250</span>
                </div>
              </div>
            </div>
          </GradientCard>

          {/* Card-3 */}
          <GradientCard>
            <h2 className="text-xl font-normal tracking-[1px] lg:mb-[28px]">
              Lightning-Fast Transactions
            </h2>
            <p className="mt-3 text-[#CAC9D1] text-[15px] mb-[16%] text-[15px] mb-[16%]">
              Experience instant crypto swaps with optimized routing across
              major networks. No delays, no waiting — just seamless, real-time
              transactions.
            </p>

            <div className="mt-6 flex justify-center w-[83%] mx-auto">
              {/* <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-700 p-1"> */}
              {/* </div> */}
              <img src={clock} alt="Lightning-Fast Transactions" />
            </div>
          </GradientCard>

          {/* Card-4 */}
          <GradientCard>
            <h2 className="text-lg font-normal tracking-[1px] lg:mb-[28px]">
              Cross-Chain Support
            </h2>
            <p className="mt-3 text-gray-300 text-[15px] mb-[16%] text-[15px] mb-[16%]">
              Swap tokens across Ethereum, BSC, Polygon, and more — without
              extra tools.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-5 mt-6">
              {images.map((src, i) => (
                <div key={i} className="">
                  <img
                    src={src}
                    alt="grid-img"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </GradientCard>
        </div>
      </div>
    </div>
  );
}
