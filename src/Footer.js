import { Link } from "react-router-dom";
import resume from "./Images/HarjotSinghResume.pdf";
import { FiArrowUpRight } from "react-icons/fi";

export const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full z-30 relative h-max pb-10 lg:px-40 lg:py-32 flex flex-col gap-10 justify-between lg:flex-row footer">
      <div className=" h-1/2 px-8 py-10 lg:py-0 lg:px-0 lg:h-full flex flex-col justify-between lg:w-1/3">
        <h3 className="poppins-medium text-white text-xl leading-loose lg:leading-normal">
          Harjot Singh. <br></br>
        </h3>
        <span className="text-green-100-custom poppins-light mt-1">
          All rights reserved 2024 ©
        </span>
        <h3 className="text-green-200-custom poppins-light mt-4">
          Designed and developed from scratch using Figma, React and Tailwind
          CSS
        </h3>
      </div>
      <div className=" h-1/2 lg:text-right lg:h-full lg:w-1/2 flex flex-row justify-start ml-8 gap-20 lg:justify-end items-start lg:items-end lg:gap-20">
        <div className="flex flex-col gap-1">
          <h2 className="poppins-medium text-white text-xl leading-loose lg:leading-normal">
            Connect
          </h2>
          <a
            className="group"
            target="_blank"
            href="https://www.linkedin.com/in/harjotsingh7/"
          >
            <h2 className="text-green-100-custom gap-1 flex flex-row items-center w-max poppins-light mt-1 lg:ml-auto">
              linkedin{" "}
              <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </h2>
          </a>
          <a
            className="group"
            target="_blank"
            href="https://github.com/harjotsk03"
          >
            <h2 className="text-green-100-custom flex flex-row items-center w-max poppins-light mt-1 lg:ml-auto">
              github{" "}
              <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </h2>
          </a>
          <a className="group" href={resume} download>
            <h2 className="text-green-100-custom flex flex-row items-center w-max poppins-light mt-1 lg:ml-auto">
              download resume{" "}
              <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};
