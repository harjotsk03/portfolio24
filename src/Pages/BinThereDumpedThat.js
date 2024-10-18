import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiChevronRight } from "react-icons/fi";
import image from "../Images/BinThereIpad.png";
import logo from "../Images/logoWebsiteBG.svg";
import image2 from "../Images/binThereDesktop1.png";
import image3 from "../Images/binThereDesktop2.png";
import image5 from "../Images/binThere1.png";
import image6 from "../Images/bintherePhone1.png";
import image7 from "../Images/binThere2.png";
import code1 from "../Images/studycode1.png";
import code2 from "../Images/studycode2.png";
import version1 from "../Images/studyv1.png";
import version2 from "../Images/studyv2.png";
import veresion1phone from "../Images/version1phone.png";
import veresion2phone from "../Images/version2phone.png";
import { FaArrowUp } from "react-icons/fa";
import { Footer } from "../Footer";

export const BinThereDumpedThat = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTo = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="w-screen h-max overflow-x-hidden pl-8 pr-8 lg:pr-0 lg:pt-28 pt-24 lg:pl-40 overflow-y-scroll relative">
        <div className="fixed scale-x-[-1] fadeInFast w-[120vw] z-0 top-0 left-0 lg:-left-40 h-full">
          <img src={logo} alt="Logo" className="object-cover w-full h-full" />
        </div>
        <div className="flex z-30 flex-col lg:flex-row gap-4 lg:gap-0 justify-center relative items-center w-full overflow-hidden">
          <div className="flex lg:w-7/12 flex-col">
            <h4 className="poppins-regular fadeUp text-sm lg:w-10/12 text-green-100-custom lg:text-green-100-custom lg:text-lg leading-relaxed mt-4 lg:mt-6">
              Software & Hardware Development
            </h4>
            <h1 className="poppins-semibold fadeUp text-[11vw] lg:text-8xl leading-snug lg:leading-tight text-white">
              Bin There, Dumped That
            </h1>
            <h4 className="poppins-regular fadeUp text-sm lg:w-10/12 text-green-100-custom lg:text-green-100-custom lg:text-lg leading-relaxed mt-4 lg:mt-6">
              A smart waste management system that helps users sort their
              garbage correctly and enables janitorial staff to monitor and
              optimize bin collection efficiently.
            </h4>
            <div className="flex flex-row items-center gap-10">
              <button
                onClick={() =>
                  goTo("https://github.com/caleb05w/BinThereDumpedThat")
                }
                className="poppins-regular w-max text-sm lg:text-base fadeUp flex flex-row items-center gap-1 text-green-200-custom-hover mt-6 lg:mt-12 text-left group"
              >
                Git Hub
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

        <div className="relative fadeUp py-24 z-30 lg:-ml-40">
          <div className="lg:w-4/5 m-auto">
            <h2 className="poppins-semibold text-white text-3xl mb-4">
              Project Overview
            </h2>
            <p className="poppins-light text-green-500-custom text-lg">
              I created{" "}
              <span className="poppins-semibold text-white">
                Bin There, Dumped That
              </span>
              , a{" "}
              <span className="poppins-semibold text-white">
                hardware-software system
              </span>{" "}
              designed to help users correctly sort their waste while assisting
              janitorial staff with{" "}
              <span className="poppins-semibold text-white">
                real-time bin monitoring
              </span>
              . The inspiration came from a common issue we noticed—confusion
              around properly sorting garbage, and inefficiencies in bin
              collection when bins were either overflowing or emptied
              unnecessarily. <br></br>
              <br></br>With{" "}
              <span className="poppins-semibold text-white">
                Bin There, Dumped That
              </span>
              , users can ensure waste is placed in the correct bin, while
              janitorial teams receive updates on{" "}
              <span className="poppins-semibold text-white">
                bin status and location
              </span>{" "}
              to streamline waste collection routes. I built the project using{" "}
              <span className="poppins-semibold text-white">React</span> and{" "}
              <span className="poppins-semibold text-white">Tailwind</span> for
              the front end, with{" "}
              <span className="poppins-semibold text-white">Node.js</span>,{" "}
              <span className="poppins-semibold text-white">Express.js</span>,
              and <span className="poppins-semibold text-white">MongoDB</span>{" "}
              powering the back end. My goal is to enhance the system with{" "}
              <span className="poppins-semibold text-white">
                data analytics
              </span>{" "}
              to further optimize waste management and improve overall
              sustainability.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:px-40 mt-12">
            <div className="lg:w-1/2 flex flex-col gap-1 items-center">
              <p className="poppins-regular lg:w-10/12 text-green-100-custom">
                The dashboard for Bin There, Dumped That where janitorial and
                admin staff of a facility can view the states and locations of
                bins
              </p>
              <img src={image2}></img>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-1 mt-6 items-center">
              <p className="poppins-regular text-green-100-custom">
                The page for creating new bins when they are placed within a
                facility
              </p>
              <img src={image3}></img>
            </div>
          </div>
        </div>
        <div className="relative py-24 z-30 lg:-ml-40">
          <div className="lg:w-4/5 bg-green-card gap-14 lg:gap-0 flex flex-col lg:flex-row justify-between lg:py-16 lg:px-20 px-16 py-14 rounded-3xl m-auto">
            <div className="flex flex-col gap-1 w-1/6">
              <h1 className="poppins-semibold text-white text-lg mb-2">
                My Role
              </h1>
              <p className="poppins-regular flex flex-row items-start gap-1 text-white text-base">
                <FiChevronRight size={12} className="mt-1" /> Full Stack
                Software Developer
              </p>
            </div>
            <div className="flex flex-col gap-1 -ml-8">
              <h1 className="poppins-semibold text-white text-lg mb-2">
                Tools
              </h1>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> MERN Stack
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> JWT & Cookies
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> AWS
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Arduino (C++)
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Python
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> OpenAI API
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Figma
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="poppins-semibold text-white text-lg mb-2">
                Project Type
              </h1>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Hackathon Project
              </p>
            </div>
            <div className="flex flex-col gap-1 -mr-16">
              <h1 className="poppins-semibold text-white text-lg mb-2">
                Timeline
              </h1>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Complete
              </p>
              <p className="poppins-regular flex flex-row items-start gap-1 w-3/4 text-white text-base">
                <FiChevronRight size={12} className="mt-1.5" /> Won 1st place at
                the hackathon
              </p>
            </div>
          </div>
        </div>

        <div className="relative py-24 z-30 lg:-ml-40">
          <div className="flex flex-col lg:flex-row lg:w-4/5 m-auto gap-4 lg:gap-20">
            <p className="lg:w-1/2 poppins-light text-green-500-custom text-lg">
              <span className="text-white poppins-semibold text-3xl leading-loose">
                Problem
              </span>
              <br></br>
              Before starting this project,{" "}
              <span className="poppins-semibold text-white">we</span>{" "}
              encountered the challenge of addressing the{" "}
              <span className="poppins-semibold text-white">
                incorrect disposal of items
              </span>{" "}
              into the wrong bins and the{" "}
              <span className="poppins-semibold text-white">
                waste of plastic bags
              </span>{" "}
              from bins being emptied when it wasn’t necessary. We saw that
              students and users were often confused about how to properly sort
              their waste, leading to contamination between{" "}
              <span className="poppins-semibold text-white">
                recycling, compost, and general waste
              </span>
              . Additionally, janitorial staff were spending time emptying bins
              that were not full, causing inefficiency and unnecessary use of
              resources. Our challenge was to create a system that could solve
              both problems efficiently.
            </p>
            <p className="lg:w-1/2 poppins-light text-green-500-custom text-lg">
              <span className="text-white poppins-semibold text-3xl leading-loose">
                Solution
              </span>
              <br></br>
              To address this,{" "}
              <span className="poppins-semibold text-white">
                we created Bin There, Dumped That
              </span>
              , a solution that ensures proper waste sorting and optimizes
              janitorial workflows. This system solves the problem by providing{" "}
              <span className="poppins-semibold text-white">
                real-time updates
              </span>{" "}
              on bin status, allowing staff to focus only on bins that need
              attention, while also guiding users to correctly sort their waste
              into{" "}
              <span className="poppins-semibold text-white">
                recycling, compost, or general waste
              </span>
              . Built using a combination of{" "}
              <span className="poppins-semibold text-white">
                Arduino hardware, React, Node.js, and AWS
              </span>
              , our platform integrates sensors with a web interface to track
              bin levels and{" "}
              <span className="poppins-semibold text-white">
                optimize waste management
              </span>{" "}
              for users and janitorial staff alike.
            </p>
          </div>
        </div>

        <div className="relative py-20 z-30 lg:-ml-40">
          <div className="flex flex-col lg:w-4/5 m-auto">
            <h2 className="poppins-semibold text-white text-3xl mb-8">
              Design & Development Process
            </h2>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-32">
              <div className="flex flex-col gap-3 lg:w-2/5">
                <h2 className="poppins-medium text-white text-2xl">
                  <sup className="text-sm poppins-light align-super">01</sup>{" "}
                  Design Goals
                </h2>
                <p className="poppins-regular flex flex-row items-start gap-1 text-green-500-custom text-lg">
                  <FiChevronRight
                    size={25}
                    strokeWidth={4}
                    className="mt-0.5"
                  />{" "}
                  Design an intuitive user interface that helps users easily
                  identify the correct bin for sorting waste, reducing confusion
                  and mistakes
                </p>
                <p className="poppins-regular flex flex-row items-start gap-1 text-green-500-custom text-lg">
                  <FiChevronRight
                    size={25}
                    strokeWidth={4}
                    className="mt-0.5"
                  />{" "}
                  Ensure the platform is accessible and responsive across all
                  devices, especially mobile, to accommodate users in public
                  spaces
                </p>
                <p className="poppins-regular flex flex-row items-start gap-1 text-green-500-custom text-lg">
                  <FiChevronRight
                    size={25}
                    strokeWidth={4}
                    className="mt-0.5"
                  />{" "}
                  Use visual cues and minimalistic design elements to guide
                  users through the waste sorting process seamlessly
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:w-2/5">
                <h2 className="poppins-medium text-white text-2xl">
                  <sup className="text-sm poppins-light align-super">02</sup>{" "}
                  Development Goals
                </h2>
                <p className="poppins-regular flex flex-row items-start gap-1 text-green-500-custom text-lg">
                  <FiChevronRight
                    size={25}
                    strokeWidth={4}
                    className="mt-0.5"
                  />{" "}
                  Build a robust system that integrates both hardware (sensors)
                  and software for real-time monitoring of waste bins
                </p>
                <p className="poppins-regular flex flex-row items-start gap-1 text-green-500-custom text-lg">
                  <FiChevronRight
                    size={25}
                    strokeWidth={4}
                    className="mt-0.5"
                  />{" "}
                  Optimize the backend for scalability to handle numerous bins
                  across different locations with accurate data
                </p>
                <p className="poppins-regular flex flex-row items-start gap-1 text-green-500-custom text-lg">
                  <FiChevronRight
                    size={25}
                    strokeWidth={4}
                    className="mt-0.5"
                  />{" "}
                  Develop an alert system that provides janitorial staff with
                  real-time notifications for bins that need immediate attention
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pb-10 z-30 lg:-ml-40">
          <div className="flex flex-col lg:w-4/5 m-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col gap-4">
                <h2 className="poppins-medium text-white text-2xl">
                  <sup className="text-sm poppins-light align-super">03</sup>{" "}
                  Design Decisions
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                  <div className="relative w-10/12 lg:w-1/2">
                    <img
                      className="w-full h-full object-contain"
                      src={image5}
                      alt="Image 1"
                    />
                    <img
                      className="absolute top-0 left-0 w-1/3 h-full object-contain"
                      src={image6}
                      alt="Image 2"
                      style={{ transform: "translate(230%, 5%)" }} // Adjust the translate values as needed
                    />
                  </div>
                  <div className="flex flex-col gap-2 lg:w-1/2 justify-center">
                    <h1 className=" text-white poppins-medium text-2xl">
                      Mobile Design First
                    </h1>
                    <p className="poppins-light text-green-500-custom text-lg">
                      Prioritizing a mobile-first approach for "Bin There,
                      Dumped That" was crucial given that our users, including
                      janitors and facility managers, interact with the system
                      in public spaces while on the move. A mobile-responsive
                      design ensures that the application is accessible and
                      fully functional on smaller screens, enabling janitors to
                      check bin statuses, receive real-time alerts, and update
                      information efficiently while standing or walking. This
                      design supports quick decision-making, allowing them to
                      respond to urgent situations without delay. <br></br>{" "}
                      <br></br>Additionally, the mobile application can leverage
                      GPS functionality, providing optimized routing to bins
                      that require servicing, thereby enhancing operational
                      efficiency. By facilitating instant communication among
                      team members and allowing for quick data entry and
                      feedback, we promote better coordination and a proactive
                      approach to waste management. Overall, this user-centered
                      design not only improves usability but also fosters higher
                      adoption rates, ultimately leading to a more effective and
                      sustainable waste management solution in public
                      environments.
                    </p>
                  </div>
                </div>

                <div className="flex mt-14 flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="relative w-10/12 lg:w-1/2">
                    <img
                      className="w-full h-full object-contain"
                      src={image7}
                      alt="Image 1"
                    />
                  </div>
                  <div className="flex flex-col gap-2 lg:w-1/2 justify-center">
                    <h1 className=" text-white poppins-medium text-2xl">
                      Simple Alerts
                      {/* <span className=" text-white">enhance visibility </span> */}
                    </h1>
                    <p className="poppins-light text-green-500-custom text-lg">
                      To prevent information overload, we implemented a concise,
                      non-intrusive alert system tailored for janitors. By
                      presenting alerts regarding full or nearly full bins in a
                      clean dashboard view, we minimized distractions and
                      streamlined their workflow, allowing them to focus solely
                      on the most pertinent information. This approach not only
                      reduces cognitive load but also enhances efficiency by
                      eliminating the need to sift through extraneous data.
                      <br></br>
                      <br></br>Additionally, integrating location tracking
                      enables janitors to prioritize their tasks effectively,
                      directing them to the bins that require immediate
                      attention based on proximity. This targeted communication
                      fosters a proactive waste management strategy, ensuring
                      that janitorial staff can maintain cleanliness in public
                      spaces without becoming overwhelmed by excessive
                      notifications, ultimately leading to a more organized and
                      responsive waste management process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-20 z-30 lg:-ml-40">
          <div className="flex flex-col lg:w-4/5 m-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col gap-4">
                <h2 className="poppins-medium text-white text-2xl">
                  <sup className="text-sm poppins-light align-super">04</sup>{" "}
                  Development Decisions
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                  <div className="relative w-10/12 lg:w-1/2">
                    <img
                      className="w-full h-full object-contain"
                      src={code1}
                      alt="Image 1"
                    />
                  </div>
                  <div className="flex flex-col gap-2 lg:w-1/2 justify-center">
                    <h1 className=" text-white poppins-medium text-2xl">
                      Sensor Integration Using Arduino
                    </h1>
                    <p className="poppins-light text-green-500-custom text-lg">
                      We opted to integrate Arduino for our hardware components
                      due to its accessibility and versatility in managing
                      various sensors. This decision significantly simplified
                      the calibration of ultrasonic sensors, enabling precise
                      measurements of bin fullness and efficient tracking of
                      locations. Arduino's user-friendly interface and extensive
                      community support facilitated a straightforward hardware
                      setup, allowing our team to focus on developing the
                      software side of the project without getting bogged down
                      in complex hardware configurations. Additionally, its
                      compatibility with numerous sensors meant we could easily
                      adapt our design as needed, ensuring that our solution
                      remained scalable and adaptable to future enhancements.
                      Overall, Arduino provided a robust foundation for
                      integrating hardware components, allowing us to achieve
                      our project goals efficiently and effectively.
                    </p>
                  </div>
                </div>

                <div className="flex mt-14 flex-col lg:flex-row gap-8 lg:gap-24">
                  <div className="relative w-10/12 lg:w-1/2">
                    <img
                      className="w-full h-full object-contain"
                      src={code2}
                      alt="Image 1"
                    />
                  </div>
                  <div className="flex flex-col gap-2 lg:w-1/2 justify-center">
                    <h1 className=" text-white poppins-medium text-2xl">
                      Image Recognition with TensorFlow
                      {/* <span className=" text-white">enhance visibility </span> */}
                    </h1>
                    <p className="poppins-light text-green-500-custom text-lg">
                      We chose to utilize TensorFlow for image recognition to
                      effectively differentiate between various types of waste.
                      This decision was pivotal, as it allowed us to leverage
                      pre-trained models, which significantly accelerated the
                      classification process while ensuring accuracy in
                      identifying items for disposal. By building on established
                      models, we reduced the time and resources required to
                      develop and train a new model from scratch, allowing us to
                      focus our efforts on fine-tuning and optimizing the
                      solution for our specific needs. This approach not only
                      streamlined the development process but also enhanced the
                      system's overall reliability, as TensorFlow’s robust
                      framework is widely recognized for its performance in
                      real-world applications. As a result, our system became
                      more efficient in guiding users towards the correct waste
                      disposal options, promoting responsible waste management
                      and minimizing contamination in recycling streams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-20 z-30 lg:-ml-40">
          <div className="flex flex-col lg:w-4/5 m-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col gap-4">
                <h2 className="poppins-medium text-white text-2xl">
                  <sup className="text-sm poppins-light align-super">05</sup>{" "}
                  Iterations
                </h2>
                <div className="flex flex-col lg:flex-row">
                  <p className="poppins-regular text-green-500-custom w-10/12 text-lg ml-6">
                    Given that this was a 24 hour hackathon project, we did not
                    have time to produce varying iteratinos, hence we only had
                    one iteration of our design and development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-20 z-30 lg:-ml-40">
          <div className="flex flex-col lg:w-4/5 m-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col gap-4">
                <h2 className="poppins-medium text-white text-2xl">
                  <sup className="text-sm poppins-light align-super">06</sup>{" "}
                  Challenges
                </h2>
                <p className="text-green-500-custom text-lg ml-6 poppins-regular">
                  While developing our waste management system with integrated{" "}
                  <span className="text-white poppins-medium">
                    sensor technology
                  </span>{" "}
                  and{" "}
                  <span className="text-white poppins-medium">
                    image recognition
                  </span>
                  , we encountered several{" "}
                  <span className="text-white poppins-medium">challenges</span>{" "}
                  along the way. One of the primary difficulties was calibrating
                  the{" "}
                  <span className="text-white poppins-medium">
                    ultrasonic sensors
                  </span>{" "}
                  to accurately account for various types of waste that could
                  distort the readings. During the final hours of the hackathon,
                  we faced significant issues with parsing the{" "}
                  <span className="text-white poppins-medium">
                    garbage bin statuses
                  </span>
                  , particularly in distinguishing between the{" "}
                  <span className="text-white poppins-medium">"empty"</span> and{" "}
                  <span className="text-white poppins-medium">"not empty"</span>{" "}
                  states, which delayed our progress and required quick
                  troubleshooting. Additionally, our{" "}
                  <span className="text-white poppins-medium">
                    ambitious roadmap
                  </span>{" "}
                  included a range of features we wanted to implement, but as
                  the project advanced, we realized that some of these features
                  were too complex for the given timeframe. Notably, we
                  ultimately decided to scrap the{" "}
                  <span className="text-white poppins-medium">
                    interactive map
                  </span>{" "}
                  that would display the locations of all garbage bins, as we
                  needed to focus on delivering a functional and reliable
                  product within the constraints of the hackathon. Balancing our
                  original vision with the{" "}
                  <span className="text-white poppins-medium">
                    technical limitations
                  </span>{" "}
                  and{" "}
                  <span className="text-white poppins-medium">
                    time pressures
                  </span>{" "}
                  highlighted the importance of prioritizing{" "}
                  <span className="text-white poppins-medium">
                    core functionalities
                  </span>{" "}
                  to ensure a successful outcome.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-20 z-30 lg:-ml-40">
          <div className="flex flex-col lg:w-4/5 m-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col gap-4">
                <h2 className="poppins-medium text-white text-2xl">
                  <sup className="text-sm poppins-light align-super">07</sup>{" "}
                  Conclusion & Takeaways
                </h2>
                <p className="text-green-500-custom text-lg ml-6 poppins-regular">
                  Building this application has been an incredibly rewarding
                  experience, enabling us to tackle a{" "}
                  <span className="text-white poppins-medium">
                    real-world problem
                  </span>{" "}
                  while gaining valuable insights into{" "}
                  <span className="text-white poppins-medium">
                    hardware-software integration
                  </span>
                  . By developing both the hardware and software components in
                  sync, we successfully created an{" "}
                  <span className="text-white poppins-medium">
                    integrated system
                  </span>{" "}
                  that is easy to use and deploy, addressing daily challenges
                  faced by{" "}
                  <span className="text-white poppins-medium">
                    janitorial teams
                  </span>
                  . One of our key takeaways was the significance of{" "}
                  <span className="text-white poppins-medium">
                    collaboration
                  </span>{" "}
                  within our diverse team, which included an Electrical
                  Engineer, a Computer Science student, a Business student, and
                  a SIAT student. This diversity allowed us to merge different
                  perspectives and expertise throughout the development process,
                  particularly in areas like{" "}
                  <span className="text-white poppins-medium">
                    UX/UI design
                  </span>
                  , frontend and backend development, and hardware systems.
                  <br></br>
                  <br></br>We gained invaluable experience in{" "}
                  <span className="text-white poppins-medium">
                    sensor calibration
                  </span>{" "}
                  and learned how to build{" "}
                  <span className="text-white poppins-medium">
                    user-friendly interfaces
                  </span>{" "}
                  tailored for{" "}
                  <span className="text-white poppins-medium">
                    non-technical users
                  </span>
                  . Additionally, we recognized the importance of{" "}
                  <span className="text-white poppins-medium">testing</span> in
                  real-world environments to refine our solution based on actual
                  user needs. Overall, this project has enhanced our technical
                  skills and reinforced the importance of integrating hardware
                  and software while focusing on user experience, ultimately
                  resulting in a solution that truly meets the needs of our
                  users.
                </p>
              </div>
            </div>
          </div>
        </div>

        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 z-50 right-6 p-4 text-green-200-custom bg-white rounded-full transition"
          >
            <FaArrowUp />
          </button>
        )}
      </div>

      <Footer />
    </>
  );
};

<div className="flex flex-col lg:flex-row lg:justify-center lg:m-auto mt-4">
  <div className="w-2/3 lg:w-1/5 m-auto lg:m-0">
    <p className="text-white text-lg poppins-medium mb-1 ml-7">
      First Iteration
    </p>
    <img src={veresion2phone} alt="First Version" />
    <p className="text-green-500-custom text-lg ml-7">dadw</p>
  </div>

  <div className="w-2/3 lg:w-1/5 m-auto">
    {" "}
    {/* Center the second div */}
    <p className="text-white text-lg poppins-medium mb-1 ml-7">
      Second Iteration
    </p>
    <img src={veresion1phone} alt="Second Version" />
    <p className="text-green-500-custom text-lg ml-7">here</p>
  </div>
</div>;
