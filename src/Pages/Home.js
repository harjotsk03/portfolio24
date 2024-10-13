import { useEffect, useState } from "react";
import { Achievements } from "../Components/Home/Acheivments";
import { Experience } from "../Components/Home/Experience";
import { Hero } from "../Components/Home/Hero";
import { Projects } from "../Components/Home/Projects";
import { Footer } from "../Footer";
import logo from "../Images/logoWebsiteBG.svg";
import { FaArrowUp } from "react-icons/fa";

export const Home = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="fixed w-[150vw] z-0 top-0 left-0 lg:-left-60 h-full">
        <img src={logo} alt="Logo" className="object-cover w-full h-full" />
      </div>
      <Hero />
      <Projects />
      <Experience />
      <Achievements />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 z-40 right-6 shadow-sm shadow-green-900 lg:shadow-none p-4 bg-green-100-custom text-white rounded-full transition"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};
