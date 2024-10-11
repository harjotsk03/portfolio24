import { useState, useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import logo from "../Images/logoWebsite.svg";

export const Nav = () => {
  const [navWidth, setNavWidth] = useState("bg-transparent w-full");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Check if the scroll direction has changed
      if (currentScrollY > 100) {
        setNavWidth("bg-green-200-custom w-5/6");
      } else {
        setNavWidth("bg-transparent w-full");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-row z-50 justify-between items-center px-14 rounded-full py-6 fixed top-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out ${navWidth}`}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="h-0.5 w-14 bg-white rounded-full"></div>
        <div className="w-6 h-6 flex items-center justify-center">
          <img src={logo} className="w-full h-full object-cover" alt="Logo" />
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <button className="text-white poppins-regular text-sm">Projects</button>
        <button className="text-white poppins-regular text-sm">
          Experience
        </button>
        <button className="text-white poppins-regular text-sm">
          Achievements
        </button>
        <button className="text-white poppins-regular text-sm">About</button>
        <button className="text-white gap-2 flex flex-row items-center poppins-regular text-sm">
          Download Resume <FiDownload />
        </button>
      </div>
    </div>
  );
};
