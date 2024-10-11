import React from "react";
import {
  BiFileBlank,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import resume from "../../Images/HarjotSinghResume.pdf";
import ButtonWithTooltip from "./ButtonWithToolTip";
import { ScrollToExplore } from "./ScrollToExplore";

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
    <div className="z-20 w-full overflow-x-hidden h-screen pb-20 lg:pb-10 px-5 lg:px-14 relative flex flex-col items-start lg:items-center justify-center">
      <h1 className="text-white text-8xl leading-tight lg:text-[11vw] poppins-semibold">
        Harjot Singh
      </h1>
      <p className="poppins-light text-green-100-custom text-md lg:text-lg mt-6 lg:mt-0">
        A student and aspiring software engineer with a focus on user experience
      </p>
      <p className="poppins-light text-green-200-custom text-sm lg:text-lg mt-2">
        BSc. Computing Science & Interactive Technology
      </p>
      <div className="flex flex-col items-start lg:items-center w-full mr-2 mt-16">
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
        </div>

        <ScrollToExplore />
      </div>
    </div>
  );
};
