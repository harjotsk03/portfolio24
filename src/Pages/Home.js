import { Achievements } from "../Components/Home/Acheivments";
import { Experience } from "../Components/Home/Experience";
import { Hero } from "../Components/Home/Hero";
import { Projects } from "../Components/Home/Projects";
import logo from "../Images/logoWebsiteBG.svg";

export const Home = () => {
  return (
    <div className="">
      <div className="fixed w-[150vw] z-0 top-0 -left-60  h-full">
        <img src={logo} alt="Logo" className="object-cover w-full h-full" />
      </div>
      <Hero />
      <Projects />
      <Experience />
      <Achievements />
    </div>
  );
};
