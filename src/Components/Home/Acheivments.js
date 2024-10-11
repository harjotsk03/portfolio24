import { FiArrowUpRight } from "react-icons/fi";
import StormHacksIpad from "../../Images/StormhacksIpad.png";

export const Achievements = () => {
  const openLink = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  const achievements = [
    {
      title: "Hackathon 1st place",
      name: "StormHacks 24'",
      description:
        "Built Bin There, Dumped That and won first place as well as the Entrepreneurial Award and Best D.E.I. Project",
      devPostLink: "https://devpost.com/software/bin-there-dumped-that",
      image: StormHacksIpad,
    },
  ];
  return (
    <div className="px-52 pt-20 pb-60 w-full overflow-x-hidden z-40 relative flex flex-col items-start justify-center">
      <h1 className="text-white text-5xl poppins-medium mb-10">
        <sup className="text-sm poppins-light align-super">03</sup> Achievements
      </h1>
      {achievements.map((role, index) => (
        <div className="w-full mb-14 flex flex-row pl-20 items-center py-10 bg-green-card2 rounded-3xl">
          <div className="w-1/2 flex flex-col">
            <h1 className="text-green-100-custom poppins-regular text-lg w-3/4 leading-tight">
              {role.title}
            </h1>
            <h1 className="text-white poppins-medium text-[3vw] w-3/4 leading-tight mt-1">
              {role.name}
            </h1>
            <h1 className="text-white poppins-regular text-lg w-4/5 mt-4">
              {role.description}
            </h1>
            <button
              onClick={() => openLink(role.devPostLink)}
              className="group bg-green-button gap-2 mt-10 w-max text-white px-4 py-2 rounded-full flex flex-row items-center"
            >
              Dev Post
              <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </button>
          </div>
          <div className="w-1/2 flex flex-col">
            <img src={role.image} alt={role.title} />
          </div>
        </div>
      ))}
    </div>
  );
};
