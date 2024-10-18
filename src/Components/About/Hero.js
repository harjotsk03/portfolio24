import React from "react";
import {
  BiFileBlank,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import resume from "../../Images/HarjotSinghResume.pdf";
import ButtonWithTooltip from "../../Components/Home/ButtonWithToolTip";
import { ScrollToExplore } from "../Home/ScrollToExplore";

export const Hero = () => {
  const buttonData = [
    {
      icon: <BiLogoLinkedin size={25} />,
      tooltip: "LinkedIn",
      key: "linkedin",
      link: "https://www.linkedin.com/in/harjotsingh7/",
    },
    {
      icon: <BiLogoGithub size={25} />,
      tooltip: "GitHub",
      key: "github",
      link: "https://github.com/harjotsk03",
    },
    {
      icon: <BiFileBlank size={25} />,
      tooltip: "Resume",
      key: "resume",
      link: resume,
    },
    {
      icon: <BiLogoInstagram size={25} />,
      tooltip: "Instagram",
      key: "instagram",
      link: "https://www.instagram.com/7harjotsk/",
    },
  ];

  return (
    <div className="z-20 w-11/12 lg:w-full overflow-x-hidden pb-20 lg:pb-0 pt-20 lg:pt-40 px-5 lg:px-52 relative flex flex-col">
      <h1 className="text-white fadeUp text-[11vw] lg:text-5xl poppins-medium">
        <sup className="text-sm poppins-light align-super">01</sup> About Me
      </h1>
      <p className="poppins-regular fadeUp text-green-500-custom text-md lg:text-lg ml-6 mt-5">
        I am a dedicated student and aspiring software engineer, currently
        pursuing a{" "}
        <span className="poppins-medium text-white">
          {" "}
          Bachelor of Science in Computing Science and Interactive Technology
        </span>{" "}
        at Simon Fraser University. My academic journey is rooted in a strong
        passion for{" "}
        <span className="poppins-medium text-white">
          {" "}
          user experience and interface design{" "}
        </span>
        , which drives my focus on web and mobile app development. <br></br>
        <br></br>My interests encompass a wide range of areas, including
        front-end development,
        <span className="poppins-medium text-white"> UI/UX design</span>,
        <span className="poppins-medium text-white">
          {" "}
          full-stack software engineering
        </span>
        , and
        <span className="poppins-medium text-white">
          {" "}
          embedded software systems engineering.{" "}
        </span>
        Throughout my studies, I have successfully completed numerous projects
        utilizing a variety of programming languages and technologies, such as
        React.js, Node.js,{" "}
        <span className="poppins-medium text-white"> JavaScript </span>,
        TypeScript, <span className="poppins-medium text-white"> Python </span>,
        C++, <span className="poppins-medium text-white"> MongoDB </span>,{" "}
        <span className="poppins-medium text-white"> AWS </span>, and more. Each
        project has honed my technical skills and deepened my understanding of
        creating intuitive, user-centered applications, with{" "}
        <span className="poppins-medium text-white">
          {" "}
          strong software development principles and understanding{" "}
        </span>
        . <br></br>
        <br></br>As I{" "}
        <span className="poppins-medium text-white">
          {" "}
          seek co-op opportunities for Summer 2025{" "}
        </span>
        , I am eager to apply my knowledge in a practical setting and gain
        insights from industry professionals. I am particularly enthusiastic
        about collaborating with teams that prioritize innovative solutions and
        full stack software development. With a{" "}
        <span className="poppins-medium text-white">
          {" "}
          commitment to continuous learning and a passion for technology{" "}
        </span>
        , I look forward to contributing my skills to impactful projects.
      </p>

      {/* Ensure this div has a relative position so that ScrollToExplore can be positioned correctly */}
      <div className="relative flex flex-col fadeUp items-start lg:items-start w-full ml-3 mt-3 lg:mt-14">
        <div className="">
          <div className="">
            {buttonData.map(({ icon, tooltip, link, key }) => (
              <ButtonWithTooltip
                icon={icon}
                tooltip={tooltip}
                link={link}
                key={key}
              />
            ))}
          </div>
          <p className="ml-3 poppins-medium text-sm text-green-200-custom">
            Connect With me
          </p>
        </div>
      </div>
    </div>
  );
};
