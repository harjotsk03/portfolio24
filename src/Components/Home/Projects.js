import { ProjectCard } from "./ProjectCard";
import BinThereIpad from "../../Images/BinThereIpad.png";
import SFURSIpad from "../../Images/SFURSIpad.png";
import StudySpotr from "../../Images/studySpotr.png";
import EcoGrowIpad from "../../Images/EcoGrowIpad.png";
import PharmaboticsIpad from "../../Images/PharmaboticsIpad.png";

export const Projects = () => {
  const projectsData = [
    {
      title: "Study Spotr",
      gitHubLink: null,
      liveSiteLink: "https://www.studyspotr.com/",
      type: "Full Stack Software Development",
      casePageLin: "studySpotr",
      description:
        "Designed and developed a study spot finder where users can find, add, and rate study spots near them or anywhere around the world",
      technologies: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "TailwindCSS",
        "Google Maps API",
        "AWS",
      ],
      image: StudySpotr,
    },
    {
      title: "Bin There, Dumped That",
      gitHubLink: "https://github.com/caleb05w/BinThereDumpedThat",
      liveSiteLink: null,
      type: "Software & Hardware Development",
      casePageLin: "bintheredumpedthat",
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
    // {
    //   title: "SFU Robot Soccer Website",
    //   gitHubLink:
    //     "https://github.com/SFURobotSoccer/sfurobotsoccerwebsitedashboard",
    //   liveSiteLink: "https://sfurobotsoccer.com",
    //   casePageLin: null,
    //   type: "Web Design & Development",
    //   description:
    //     "Redesigned and developed the SFU RS website for better mobile usability, a more unified feeling UI, and better user engagement",
    //   technologies: ["ReactJS", "TailwindCSS", "Google Firebase"],
    //   image: SFURSIpad,
    // },
    // {
    //   title: "Pharmabotics",
    //   gitHubLink: "https://github.com/harjotsk03/pharmabotics",
    //   liveSiteLink: null,
    //   casePageLin: null,
    //   type: "Software & Hardware Development",
    //   description:
    //     "An automated medicine dispensing system using hardware and software.",
    //   technologies: [
    //     "ReactJS",
    //     "TailwindCSS",
    //     "NodeJS",
    //     "ExpressJS",
    //     "MongoDB",
    //     "Arduino (C++)",
    //   ],
    //   image: PharmaboticsIpad,
    // },
    // {
    //   title: "EcoGrow",
    //   gitHubLink: "https://github.com/harjotsk03/GardenSimulationJava",
    //   liveSiteLink: null,
    //   casePageLin: null,
    //   type: "Software/Game Development",
    //   description:
    //     "A garden simulation game to learn Object Oriented Programming.",
    //   technologies: ["Java"],
    //   image: EcoGrowIpad,
    // },
  ];

  return (
    <div className="lg:px-52 px-4 pt-20 lg:pt-28 w-full overflow-x-hidden z-20 relative flex flex-col items-start justify-center">
      <h1 className="text-white text-[11vw] lg:text-5xl poppins-medium mb-4 lg:mb-10">
        <sup className="text-sm poppins-light align-super">01</sup> Projects
      </h1>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};
