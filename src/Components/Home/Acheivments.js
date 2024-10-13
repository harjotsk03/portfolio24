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
    <div className="lg:px-52 px-6 pt-20 pb-10 w-full overflow-x-hidden z-20 relative flex flex-col items-start justify-center">
      <h1 className="text-white text-[11vw] lg:text-5xl poppins-medium mb-10">
        <sup className="text-sm poppins-light align-super">03</sup> Achievements
      </h1>
      {achievements.map((role, index) => (
        <div
          key={index}
          className="w-full mb-14 flex flex-col overflow-hidden lg:flex-row px-10 lg:px-0 lg:pl-20 items-center pt-10 pb-40 lg:pt-28 lg:pb-28 bg-green-card2 rounded-3xl relative"
        >
          <div className="lg:w-1/2 flex flex-col">
            <h1 className="text-green-100-custom poppins-regular text-lg lg:w-3/4 leading-tight">
              {role.title}
            </h1>
            <h1 className="text-white poppins-medium text-4xl lg:text-[3vw] lg:w-3/4 leading-tight mt-1">
              {role.name}
            </h1>
            <h1 className="text-white poppins-regular text-lg lg:w-4/5 mt-4">
              {role.description}
            </h1>
            <button
              onClick={() => openLink(role.devPostLink)}
              className="group bg-green-button gap-2 mt-10 w-max text-white px-4 py-2 rounded-full flex flex-row items-center transition-colors duration-300 ease-in-out hover:bg-white hover:text-green-700"
            >
              Dev Post
              <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </button>
          </div>

          <div className="lg:w-1/2 w-full h-full mt-4 lg:mt-0 flex flex-col relative">
            <img
              className="absolute lg:right-[-10%] right-0 top-1/2 lg:-translate-y-1/2 transform object-cover object-right lg:object-center w-full"
              src={role.image}
              alt={role.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
