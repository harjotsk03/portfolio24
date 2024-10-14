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
      <div className="fixed fadeInFast w-[150vw] z-0 top-0 left-0 lg:-left-60 h-full">
        <img src={logo} alt="Logo" className="object-cover w-full h-full" />
      </div>

      {/* Sections with IDs */}
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="achievements">
        <Achievements />
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 z-30 right-6 p-4 text-green-200-custom bg-white rounded-full transition"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};
