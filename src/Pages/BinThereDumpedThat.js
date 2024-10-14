import { FiArrowUpRight } from "react-icons/fi";
import image from "../Images/BinThereIpad.png";
import logo from "../Images/logoWebsiteBG.svg";

export const BinThereDumpedThat = () => {
  return (
    <div className="w-screen h-max overflow-x-hidden pl-8 pr-8 lg:pr-0 lg:pt-28 pt-24 lg:pl-40 overflow-y-scroll relative">
      <div className="fixed scale-x-[-1] fadeInFast w-[120vw] z-0 top-0 left-0 lg:-left-40 h-full">
        <img src={logo} alt="Logo" className="object-cover w-full h-full" />
      </div>
      <div className="flex fadeUp z-30 flex-col lg:flex-row gap-4 lg:gap-0 justify-center relative items-center w-full overflow-hidden">
        <div className="flex lg:w-7/12 flex-col">
          <h1 className="poppins-semibold text-[11vw] lg:text-8xl leading-snug lg:leading-tight text-white">
            Bin There, Dumped That
          </h1>
          <h4 className="poppins-regular fadeUp text-sm lg:w-10/12 text-green-100-custom lg:text-green-100-custom lg:text-lg leading-relaxed mt-4 lg:mt-6">
            A study spot finder where users can find, add, and rate study spots
            near them or anywhere around the world
          </h4>
          <div className="flex flex-row items-center gap-10">
            <button className="poppins-regular w-max text-sm lg:text-base fadeUp flex flex-row items-center gap-1 text-green-200-custom-hover mt-6 lg:mt-12 text-left group">
              GitHub
              <FiArrowUpRight className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
            </button>
            <button className="poppins-regular w-max text-sm lg:text-base fadeUp flex flex-row items-center gap-1 text-green-200-custom-hover mt-6 lg:mt-12 text-left group">
              Dev Post
              <FiArrowUpRight className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
            </button>
          </div>
        </div>

        <div className="lg:w-2/3 fadeUp h-[35vh] lg:h-[65vh] flex mr-auto lg:justify-end overflow-hidden">
          <img
            className="w-[120%] h-full object-contain lg:-mr-24"
            src={image}
            alt="Bin There Ipad"
          />
        </div>
      </div>

      <div className="relative fadeUp mt-24 lg:-ml-6 lg:pr-14 z-30">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:px-20 lg:py-16 px-10 py-10 h-max flex lg:w-2/5 ml-auto flex-row bg-green-100-custom rounded-3xl">
            <div className="flex flex-col justify-evenly w-1/2 gap-4 mr-12">
              <div className="flex flex-col items-start gap-2">
                <h1 className="text-white poppins-medium text-xl ">My Role</h1>
                <h1 className="text-green-100-custom poppins-regular  ">
                  Full Stack Software Developer
                </h1>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h1 className="text-white poppins-medium text-xl">Timeline</h1>
                <h1 className="text-green-100-custom poppins-regular  ">
                  24hr Hackathon
                </h1>
                <h1 className="text-green-100-custom poppins-regular  ">
                  Project is completed
                </h1>
              </div>
            </div>
            <div className="flex flex-col w-1/3 items-start gap-2">
              <h1 className="text-white poppins-medium text-xl">Tools</h1>
              <h1 className="text-green-100-custom poppins-regular  ">
                React.js
              </h1>
              <h1 className="text-green-100-custom poppins-regular  ">
                Node.js
              </h1>
              <h1 className="text-green-100-custom poppins-regular  ">
                MongoDB
              </h1>
              <h1 className="text-green-100-custom poppins-regular  ">
                AWS S3
              </h1>
              <h1 className="text-green-100-custom poppins-regular  ">
                Arduino (C++)
              </h1>
              <h1 className="text-green-100-custom poppins-regular  ">
                Python
              </h1>
            </div>
            {/* <div className="flex flex-col w-1/4 items-start gap-4">
            <h1 className="text-white poppins-medium text-xl -mb-3">
              Next Steps
            </h1>
            <h1 className="text-green-100-custom poppins-regular  ">
              Front end & Back end Software Developer
            </h1>
          </div> */}
          </div>
          <div className="px-0 w-full lg:px-20 py-16 flex lg:w-3/5 flex-col rounded-3xl">
            <h1 className="text-white text-3xl mb-2 poppins-medium">
              Overview
            </h1>
            <p className="text-green-400-custom text-lg leading-relaxed tracking-wider poppins-light">
              Bin There, Dumped That is an easily integratable{" "}
              <span className="text-white poppins-medium">
                hardware system{" "}
              </span>
              that attaches to standard garbage cans. Through monitoring their
              status, we can provide{" "}
              <span className="text-white poppins-medium">
                real-time updates{" "}
              </span>{" "}
              on whether the bin is full, empty, or partially filled for
              janitorial staff reference. It also tracks the location of each
              bin, to optimize the most efficient pathway to it. This allows
              janitorial staff to focus on the bins that need attention while
              skipping those that are empty or barely used. Daily users engage
              in a{" "}
              <span className="text-white poppins-medium">
                sorting feature{" "}
              </span>{" "}
              that enables them to properly dispose of their waste in the
              accurate bin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
