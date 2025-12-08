
import logo from "../../assets/logo.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { LuWalletCards } from "react-icons/lu";
import pen from "../../assets/icons/image1.png"
import search from "../../assets/icons/image2.png"
import fes from "../../assets/icons/image3.png"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function IntercomAuthPage() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    function handleClick() {
        setOpen(false)
        navigate("/home")
    }
    useEffect(() => {
        if (location.pathname === "/") {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [location.pathname]);

    return (
        <div className={`w-[100%] h-[100%] flex justify-center items-center pt-3 pb-7 bg-[#00031E] 
        ${open ? "flex" : "hidden"} `}>
            <div className="w-[98%] h[98%] text-white flex flex-col md:flex-row box-border">
                <div className="rounded-2xl box-border rounded flex-1 pt-10 pr-4 sm:pr-10 pl-4 sm:pl-10 pb-0 flex flex-col justify-center bg-gradient-to-b from-[#c9c9d3] from-1% via-[#4F1AD6] via-15% via-[#4F1AD6] via-10%  to-[#000000]/100 ">
                    <div className="max-w-md mx-auto pt-[16%]">
                        <div className="w-fit flex-col flex items-start mx-auto gap-4">
                            <div className="flex items-center gap-3">
                                <div className=" rounded-xl">
                                    <img src={logo} alt="Intercom" className="w-10 h-10" />
                                </div>
                                <h1 className="text-xl font-bold">INTERCOM</h1>
                            </div>

                            <h2 className="text-xl font-semibold mb-10">Get Started with us</h2>
                        </div>
                        <div className="space-y-5 sm:border-l-2 border-[#757477] sm:pl-12">
                            <div className="relative">
                                <div className="absolute -left-[18%] top-9 sm:w-5 sm:h-5 bg-[#110B17] rounded-full border border-[#501AD6]"></div>
                                <div className="bg-black p-5 rounded-xl border border-white/10 border border-[#4F1AD6]">
                                    <h3 className="font-sm text-normal  flex items-center mb-1"><img src={pen} alt="pencel" className=" w-5 h-5 mr-2" />Sign up your account</h3>
                                    <p className="text-xs text-gray-400">Complete these easy steps to register your account.</p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[18%] top-9 sm:w-5 sm:h-5 bg-[#110B17] rounded-full border border-[#501AD6]"></div>
                                <div className="bg-black p-5 rounded-xl border border-white/10 border border-[#4F1AD6]">
                                    <h3 className="font-sm text-normal  flex items-center mb-1"><img src={search} alt="pencel" className=" w-5 h-5 mr-2" /> Create your account</h3>
                                    <p className="text-xs text-gray-400">Complete these easy steps to register your account.</p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[18%] top-9 sm:w-5 sm:h-5 bg-[#110B17] rounded-full border border-[#501AD6]"></div>
                                <div className="bg-black p-5 rounded-xl border border-white/10 border border-[#4F1AD6]">
                                    <h3 className="font-sm text-normal  flex items-center mb-1"><img src={fes} alt="pencel" className=" w-5 h-5 mr-2" /> Start trading with FxnX</h3>
                                    <p className="text-xs text-gray-400">Complete these easy steps to register your account.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* right side */}
                <div className="flex-1 px-6 py-4 flex flex-col justify-center box-border">
                    <div className="max-w-sm mx-auto w-full ">
                        <div className="flex-col flex items-center justify-center gap-2 mb-4 py-7 ">
                            <img src={logo} alt="Logo" className="w-9 h-9" />
                            <h2 className="text-2xl font-semibold">Sign In to INTERCOM</h2>
                        </div>

                        <button className="w-full bg-[#BD9CFF] text-[#511CD7] font-semibold text-[13px] py-2.5 rounded-lg mb-4 flex justify-center items-center border border-[#511CD7]">
                            <LuWalletCards className="mr-3 text-[14px]" /> Connect Wallet
                        </button>

                        <div className="flex items-center gap-3 mb-4 py-4">
                            <div className="flex-1 h-px bg-gray-600"></div>
                            <span className="text-white text-xs">Or</span>
                            <div className="flex-1 h-px bg-gray-600"></div>
                        </div>

                        <div className="space-y-4 ">
                            <div className="">
                                <label className="text-xs">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="placeholder:text-xs placeholder-gray-500 w-full mt-1.5 p-2.5 rounded-md bg-[#1C1E31] text-white focus:outline-purple-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-xs">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter Your Password"
                                    className="placeholder:text-xs placeholder-gray-500 w-full mt-1.5 p-2.5 rounded-md bg-[#1C1E31] text-white focus:outline-purple-500 outline-none"
                                />
                            </div>

                            <div className="flex justify-between items-center text-xs pb-7">
                                <label className="flex items-center gap-1.5">
                                    <input type="checkbox" className="accent-purple-500 w-3.5 h-3.5 bg-white rounded-full cursor-pointer" /> Remember me
                                </label>
                                <button className="text-[#A582FF] text-xs">Forgot Password?</button>
                            </div>

                            <button className="mb-7 w-full bg-gradient-to-t to-[#4F1AD6] from-[#8059E3] py-2.5 rounded-lg font-normal flex justify-center items-center" onClick={handleClick}>
                                Sign In <FaArrowRightLong className="text-[13px] ml-1.5" />
                            </button>

                            <p className="text-center text-gray-400 text-xs mt-3">
                                Do you have an account? <span className="text-[#A582FF] cursor-pointer">Sign up</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div></div>
    );
}
