import { useState, useEffect, useRef } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import logo from "../Images/logoWebsite.svg";

export const Nav = () => {
  const [navWidth, setNavWidth] = useState("bg-transparent w-full");
  const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu toggle
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setNavWidth("bg-green-200-custom w-5/6");
      } else {
        setNavWidth("bg-transparent w-full");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`flex flex-row z-50 justify-between items-center px-8 lg:px-14 rounded-full py-4 lg:py-6 fixed top-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out ${navWidth}`}
      >
        <div className="flex flex-row items-center gap-3">
          <div className="hidden lg:flex h-0.5 w-14 bg-white rounded-full"></div>
          <div className="w-6 h-6 flex items-center justify-center">
            <img src={logo} className="w-full h-full object-cover" alt="Logo" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-10">
          <button className="text-white poppins-regular text-sm">
            Projects
          </button>
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

        {/* Hamburger Menu Icon for Mobile */}
        <div className="flex md:hidden z-50">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-full bg-green-200-custom text-white z-40 transform transition-transform duration-1000 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-start justify-center px-6`}
      >
        <button className="text-white poppins-regular text-lg mb-4">
          Projects
        </button>
        <button className="text-white poppins-regular text-lg mb-4">
          Experience
        </button>
        <button className="text-white poppins-regular text-lg mb-4">
          Achievements
        </button>
        <button className="text-white poppins-regular text-lg mb-4">
          About
        </button>
        <button className="text-white gap-2 flex flex-row items-center poppins-regular text-lg mb-4">
          Download Resume <FiDownload />
        </button>
      </div>
    </>
  );
};
