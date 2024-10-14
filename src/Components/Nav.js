import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import logo from "../Images/logoWebsite.svg";

export const Nav = () => {
  const [navWidth, setNavWidth] = useState("bg-transparent w-full");
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      // Scroll to the section smoothly
      element.scrollIntoView({ behavior: "smooth" });

      // After scrolling, adjust by 50 pixels more down
      const yOffset = -0; // 50 pixels more down
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Function to handle navigation and scrolling
  const goTo = (section) => {
    if (location.pathname === "/") {
      scrollToSection(section);
      setMenuOpen(false);
    } else {
      navigate("/", { state: { section } });
      setMenuOpen(false);
    }
  };

  // Handle scroll event for changing navbar style
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

  // Handle section scroll after navigation (for when coming from another page)
  useEffect(() => {
    if (location.state?.section) {
      const { section } = location.state;
      scrollToSection(section);
    }
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`flex flex-row z-50 justify-between items-center px-8 lg:px-14 rounded-full py-4 lg:py-6 fixed top-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out ${navWidth}`}
      >
        <button
          onClick={() => goTo("hero")}
          className="flex flex-row items-center gap-3"
        >
          <div className="hidden lg:flex h-0.5 w-14 bg-white rounded-full"></div>
          <div className="w-6 h-6 flex items-center justify-center">
            <img src={logo} className="w-full h-full object-cover" alt="Logo" />
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-10">
          <button
            onClick={() => goTo("projects")}
            className="text-white poppins-regular text-sm"
          >
            Projects
          </button>
          <button
            onClick={() => goTo("experience")}
            className="text-white poppins-regular text-sm"
          >
            Experience
          </button>
          <button
            onClick={() => goTo("achievements")}
            className="text-white poppins-regular text-sm"
          >
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
        <button
          onClick={() => goTo("projects")}
          className="text-white poppins-regular text-lg mb-4"
        >
          Projects
        </button>
        <button
          onClick={() => goTo("experience")}
          className="text-white poppins-regular text-lg mb-4"
        >
          Experience
        </button>
        <button
          onClick={() => goTo("achievements")}
          className="text-white poppins-regular text-lg mb-4"
        >
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
