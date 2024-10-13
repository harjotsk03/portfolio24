import { FiArrowUpRight } from "react-icons/fi";
import image from "../Images/BinThereIpad.png";

export const BinThereDumpedThat = () => {
  return (
    <div className="w-screen h-max overflow-x-hidden pt-28 pl-40 overflow-y-scroll relative">
      {/* Large background text */}
      <h1 className="fixed text-[15vw] leading-none -top-10 z-0 -left-8 w-[110vw] poppins-bold text-green-300-custom">
        Bin There, Dumped That
      </h1>

      {/* Content section */}
      <div className="flex z-30 flex-row justify-center relative items-center w-full overflow-hidden">
        <div className="flex w-1/2 flex-col">
          <h1 className="poppins-semibold text-8xl leading-tight text-white">
            Bin There, Dumped That
          </h1>
          <h4 className="poppins-regular w-10/12 text-white text-lg leading-relaxed mt-6">
            A study spot finder where users can find, add, and rate study spots
            near them or anywhere around the world
          </h4>
          <button className="poppins-regular flex flex-row items-center gap-1 text-white mt-12 text-left">
            GitHub <FiArrowUpRight />
          </button>
        </div>

        <div className="w-1/2 h-[60vh] flex justify-end overflow-hidden">
          <img
            className="w-[120%] h-full object-contain -mr-24" // Increase width and move image to the left
            src={image}
            alt="Bin There Ipad"
          />
        </div>
      </div>

      <div className="relative mt-96 z-30">
        <h1>hello</h1>
      </div>
    </div>
  );
};
