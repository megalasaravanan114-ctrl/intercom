import { Link } from "react-router-dom";
import FooterBg from "../../assets/Footer.jpg";
import logo from "../../assets/logo.png";
// import bottomBorder from "../assets/icons/bottomBorder.png"
import { LuArrowUpRight } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { useEffect, useState } from "react";

export default function FooterSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;

      if (scrollPosition >= pageHeight - 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="w-full  text-white  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* left */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Link to="/" className="flex item-center text-[16px]">
              <img src={logo} alt="logo" className="w-[27px] h-[27px] mr-2" />
              <h2 className="text-xl font-semibold tracking-wide">INTERCOM</h2>
            </Link>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm w-[80%]">
            Revolutionize the writing industry by making high-quality content
            generation faster
          </p>
        </div>

        {/* middle */}

        <div>
          <h4 className="text-base text-gray-400 mb-4">Email</h4>
          <p className="text-lg mb-10">intercom.ai@gmail.com</p>

          <h4 className="text-base text-gray-400 mb-4">Phone number</h4>
          <p className="text-lg mb-10">+1 (208) 120-802</p>

          <h4 className=" text-base text-gray-400 mb-4">Location</h4>
          <p className="text-lg">Los Angeles, CA</p>
        </div>
        {/* right */}
        <div>
          <p className="text-base text-gray-400 mb-12">
            Start trial experience 14-days Free
          </p>

          <hr className="border-gray-600 mb-8 border " />

          <button className="px-6 py-2 rounded-full border border-gray-500 flex items-center gap-2">
            Get Started{" "}
            <span className="text-xl">
              <LuArrowUpRight />
            </span>
          </button>

          <div className="flex items-center gap-6 mt-10">
            <div className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center">
              <div className="text-[24px] cursor-pointer">
                <FaFacebookF />
              </div>
            </div>
            <div className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center">
              <div className="text-[24px] cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
            <div className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center">
              <div className="text-[24px] cursor-pointer">
                <CiBasketball />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div
        className="max-w-7xl mx-auto px-6 pt-6
      pb-[8%] flex justify-between text-white mg:text-lg text-sm"
      >
        <p>
          © 2024 Copyright – Nexux | Designed by "LoganCee" | <br /> License |
          Powered by Framer
        </p>
        {show && (
          <div
            className={`back-to-top ${show ? "show" : ""}`}
            onClick={scrollToTop}
          >
            <span className="desktop-text">Back to top ↑</span>
          </div>
        )}
      </div>
    </footer>
  );
}
