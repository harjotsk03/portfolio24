import { FiArrowUpRight } from "react-icons/fi";

export const ProjectCard = ({ project }) => {
  const openLink = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="w-full mb-20 flex flex-col overflow-hidden lg:flex-row px-10 lg:px-0 lg:pl-20 items-center lg:pt-20 pb-40 lg:pb-20 pt-10 bg-green-card rounded-3xl relative">
      <div className="lg:w-1/2 flex flex-col">
        <div className="flex flex-row gap-6">
          {project.liveSiteLink && (
            <button
              onClick={() => openLink(project.liveSiteLink)}
              className="group text-white gap-1 poppins-regular text-sm mb-3 flex flex-row items-center w-max"
            >
              Live Site
              <FiArrowUpRight className="transform transition-transform duration-500 ease-in-out group-hover:rotate-45" />
            </button>
          )}
          {project.gitHubLink && (
            <button
              onClick={() => openLink(project.gitHubLink)}
              className="group text-white gap-1 poppins-regular text-sm mb-3 flex flex-row items-center w-max"
            >
              GitHub
              <FiArrowUpRight className="transform transition-transform duration-500 ease-in-out group-hover:rotate-45" />
            </button>
          )}
        </div>

        <h1 className="text-white poppins-medium text-4xl lg:text-[3vw] lg:w-3/4 leading-tight">
          {project.title}
        </h1>
        <h1 className="text-white poppins-regular text-lg lg:w-4/5 mt-3">
          {project.description}
        </h1>

        <div className="flex-wrap flex lg:w-3/4 gap-x-6 gap-y-2 mt-8">
          {project.technologies.map((tech, index) => (
            <p
              key={index}
              className="text-sm text-green-100-custom poppins-light"
            >
              {tech}
            </p>
          ))}
        </div>

        <button className="group bg-green-button gap-2 mt-10 w-max text-white px-4 py-2 rounded-full flex flex-row items-center transition-colors duration-300 ease-in-out hover:bg-white hover:text-green-700">
          Case Study
          <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out group-hover:rotate-45" />
        </button>
      </div>

      <div className="lg:w-1/2 w-full h-full -mb-10 lg:mb-0 mt-4 lg:mt-0  flex flex-col relative">
        <img
          className="absolute lg:right-[-10%] top-1/2 transform lg:-translate-y-1/2 w-full lg:w-full h-auto object-cover "
          src={project.image}
          alt={project.title}
        />
      </div>
    </div>
  );
};
