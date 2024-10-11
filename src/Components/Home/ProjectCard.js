import { FiArrowUpRight } from "react-icons/fi";

export const ProjectCard = ({ project }) => {
  const openLink = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="w-full mb-14 flex flex-row pl-20 items-center py-10 bg-green-card rounded-3xl">
      <div className="w-1/2 flex flex-col">
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

        <h1 className="text-white poppins-medium text-[3vw] w-3/4 leading-tight">
          {project.title}
        </h1>
        <h1 className="text-white poppins-regular text-lg w-4/5 mt-3">
          {project.description}
        </h1>

        <div className="flex-wrap flex w-3/4 gap-x-6 gap-y-2 mt-8">
          {project.technologies.map((tech, index) => (
            <p
              key={index}
              className="text-sm text-green-100-custom poppins-light"
            >
              {tech}
            </p>
          ))}
        </div>

        <button className="group bg-green-button gap-2 mt-10 w-max text-white px-4 py-2 rounded-full flex flex-row items-center">
          Case Study
          <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out group-hover:rotate-45" />
        </button>
      </div>
      <div className="w-1/2 flex flex-col">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
};
