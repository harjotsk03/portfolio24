import { ProjectCard } from "./ProjectCard";
import BinThereIpad from "../../Images/BinThereIpad.png";
import SFURSIpad from "../../Images/SFURSIpad.png";
import EcoGrowIpad from "../../Images/EcoGrowIpad.png";
import PharmaboticsIpad from "../../Images/PharmaboticsIpad.png";

export const Projects = () => {
  const projectsData = [
    {
      title: "Bin There, Dumped That",
      gitHubLink: "https://github.com/caleb05w/BinThereDumpedThat",
      liveSiteLink: null,
      casePageLin: "",
      description: "Improve waste management, with an affordable solution.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Arduino (C++)",
        "Python",
        "OpenAI API",
      ],
      image: BinThereIpad,
    },
    {
      title: "SFU Robot Soccer Website",
      gitHubLink: "https://github.com/caleb05w/BinThereDumpedThat",
      liveSiteLink: "https://sfurobotsoccer.com",
      casePageLin: "",
      description:
        "Redesign and develop SFU RS website to improve mobile accessability.",
      technologies: ["ReactJS", "TailwindCSS", "Google Firebase"],
      image: SFURSIpad,
    },
    {
      title: "Pharmabotics",
      gitHubLink: "https://github.com/caleb05w/BinThereDumpedThat",
      liveSiteLink: null,
      casePageLin: "",
      description:
        "An automated medicine dispensing system using hardware and software.",
      technologies: [
        "ReactJS",
        "TailwindCSS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Arduino (C++)",
      ],
      image: PharmaboticsIpad,
    },
    {
      title: "EcoGrow",
      gitHubLink: "https://github.com/caleb05w/BinThereDumpedThat",
      liveSiteLink: null,
      casePageLin: "",
      description:
        "A garden simulation game to learn Object Oriented Programming.",
      technologies: ["Java"],
      image: EcoGrowIpad,
    },
  ];

  return (
    <div className="px-6 lg:px-52 lg:pt-20 w-full overflow-x-hidden z-20 relative flex flex-col items-start justify-center">
      <h1 className="text-white text-[11vw] lg:text-5xl poppins-medium mb-4 lg:mb-10">
        <sup className="text-sm poppins-light align-super">01</sup> Projects
      </h1>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};
