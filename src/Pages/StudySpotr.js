import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiChevronRight } from "react-icons/fi";
import image from "../Images/studySpotr.png";
import logo from "../Images/logoWebsiteBG.svg";
import image2 from "../Images/studySpotrDesktop.png";
import image3 from "../Images/studySpotrDesktop2.png";
import image4 from "../Images/studyphone1.png";
import image5 from "../Images/studytablet1.png";
import image6 from "../Images/studyphone2.png";
import image7 from "../Images/studytablet2.png";
import code1 from "../Images/studycode1.png";
import code2 from "../Images/studycode2.png";
import version1 from "../Images/studyv1.png";
import version2 from "../Images/studyv2.png";
import veresion1phone from "../Images/version1phone.png";
import veresion2phone from "../Images/version2phone.png";
import { FaArrowUp } from "react-icons/fa";
import { Footer } from "../Footer";

export const StudySpotr = () => {
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
              Full Stack Software Development
            </h4>
            <h1 className="poppins-semibold fadeUp text-[11vw] lg:text-8xl leading-snug lg:leading-tight text-white">
              Study Spotr
            </h1>
            <h4 className="poppins-regular fadeUp text-sm lg:w-10/12 text-green-100-custom lg:text-green-100-custom lg:text-lg leading-relaxed mt-4 lg:mt-6">
              A study spot finder where users can find, add, and rate study
              spots near them or anywhere around the world
            </h4>
            <div className="flex flex-row items-center gap-10">
              <button
                onClick={() => goTo("https://www.studyspotr.com/")}
                className="poppins-regular w-max text-sm lg:text-base fadeUp flex flex-row items-center gap-1 text-green-200-custom-hover mt-6 lg:mt-12 text-left group"
              >
                Live Site
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
              I created Study Spotr, a{" "}
              <span className="poppins-semibold text-white">
                full-stack application
              </span>{" "}
              that helps students easily find ideal study spots, whether nearby
              or anywhere around the world. The inspiration came from a common
              problem I and many students face—finding the perfect place to
              study with the right amenities like{" "}
              <span className="poppins-semibold text-white">
                Wi-Fi, power outlets, quiet spaces, and whiteboards{" "}
              </span>
              . With Study Spotr, users can search for spots by location, use an
              <span className="poppins-semibold text-white">
                interactive map powered by Google Maps{" "}
              </span>
              , or browse a list of study spots to find exactly what they need.{" "}
              <br></br> <br></br>
              Each location provides important details, including whether ID is
              required, and{" "}
              <span className="poppins-semibold text-white">
                users can leave ratings and reviews{" "}
              </span>{" "}
              based on their experience, ensuring future visitors get accurate
              feedback. I built this project using the{" "}
              <span className="poppins-semibold text-white">MERN stack </span>{" "}
              (MongoDB, Express.js, React.js, and Node.js), which allowed me to
              create a scalable and interactive platform. My goal is to grow the
              app with over{" "}
              <span className="poppins-semibold text-white">
                100+ active study spots
              </span>{" "}
              in the coming months and make it a useful tool for students
              everywhere.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:px-40 mt-12">
            <div className="lg:w-1/2 flex flex-col gap-1 items-center">
              <p className="poppins-regular text-green-100-custom">
                The home page for Study Spotr where users can interact with the
                map
              </p>
              <img src={image2}></img>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-1 items-center">
              <p className="poppins-regular text-green-100-custom">
                The profile page where users can see the spots they have created
              </p>
              <img src={image3}></img>
            </div>
          </div>
        </div>
        <div className="relative py-24 z-30 lg:-ml-40">
          <div className="lg:w-4/5 bg-green-card gap-14 lg:gap-0 flex flex-col lg:flex-row justify-between lg:py-16 lg:px-20 px-16 py-14 rounded-3xl m-auto">
            <div className="flex flex-col gap-1">
              <h1 className="poppins-semibold text-white text-lg mb-2">
                My Role
              </h1>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Founder
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Software Developer
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="poppins-semibold text-white text-lg mb-2">
                Tools
              </h1>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> MERN Stack
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Google Maps API
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> JWT & Cookies
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> AWS
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="poppins-semibold text-white text-lg mb-2">
                Project Type
              </h1>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Start Up Company
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Personal Project
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="poppins-semibold text-white text-lg mb-2">
                Timeline
              </h1>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> Ongoing
              </p>
              <p className="poppins-regular flex flex-row items-center gap-1 text-white text-base">
                <FiChevronRight size={12} /> In first phase of testing
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
              Before starting this project, I faced the challenge of not having
              built a fully{" "}
              <span className="poppins-semibold text-white">
                hosted full-stack application{" "}
              </span>{" "}
              accessible to real users. This made developing both the front-end
              and back-end from scratch a new experience for me. Additionally, I
              recognized a common issue that students frequently encounter: the
              question of{" "}
              <span className="poppins-semibold text-white">
                "where should we study today?"{" "}
              </span>{" "}
              Students often struggle to find study spots that meet their
              needs—whether it's having access to Wi-Fi, power outlets, or a
              quiet environment to focus.
            </p>
            <p className="lg:w-1/2 poppins-light text-green-500-custom text-lg">
              <span className="text-white poppins-semibold text-3xl leading-loose">
                Solution
              </span>
              <br></br>
              To address this, I created Study Spotr, an application that allows
              students to easily find the perfect study location nearby or{" "}
              <span className="poppins-semibold text-white">
                anywhere in the world{" "}
              </span>
              . This platform solves the problem by providing detailed
              information about study spots, including amenities like{" "}
              <span className="poppins-semibold text-white">
                Wi-Fi, outlets, quiet spaces, and more{" "}
              </span>
              . With the ability to{" "}
              <span className="poppins-semibold text-white">
                rate and review locations, students can make informed decisions
                about where to study{" "}
              </span>
              , saving time and avoiding frustration. Built with the MERN stack
              (MongoDB, Express.js, React.js, and Node.js) and integrated with
              the Google Maps API, Study Spotr provides a seamless user
              experience, offering multiple ways to discover and explore ideal
              study environments.
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
                  Design an interface that is easy to navigate and has strong
                  user experience principles in place
                </p>
                <p className="poppins-regular flex flex-row items-start gap-1 text-green-500-custom text-lg">
                  <FiChevronRight
                    size={25}
                    strokeWidth={4}
                    className="mt-0.5"
                  />{" "}
                  Create a cohesive interface that is responsive on various
                  devices with a focus on mobile screens sizes
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
                  Develop my first full stack application that I can host and
                  gain an active user base
                </p>
                <p className="poppins-regular flex flex-row items-start gap-1 text-green-500-custom text-lg">
                  <FiChevronRight
                    size={25}
                    strokeWidth={4}
                    className="mt-0.5"
                  />{" "}
                  Write clean, documented code and have multiple developers
                  working on the code base at the same time
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
                      src={image4}
                      alt="Image 2"
                      style={{ transform: "translate(230%, 5%)" }} // Adjust the translate values as needed
                    />
                  </div>
                  <div className="flex flex-col gap-2 lg:w-1/2 justify-center">
                    <h1 className=" text-white poppins-medium text-2xl">
                      Location Pins
                    </h1>
                    <p className="poppins-light text-green-500-custom text-lg">
                      I chose a vibrant orange color for the location pins to{" "}
                      <span className=" text-white">enhance visibility </span>{" "}
                      and draw attention to selected study spots. Orange stands
                      out against most backgrounds, making it{" "}
                      <span className=" text-white">
                        {" "}
                        easy for users to quickly identify their chosen
                        locations{" "}
                      </span>
                      . To further improve accessibility, I increased the{" "}
                      <span className=" text-white">
                        {" "}
                        size of the selected pins{" "}
                      </span>
                      , ensuring that users with color vision deficiencies can
                      distinguish between selected and non-selected spots. This
                      combination of color and size not only{" "}
                      <span className=" text-white"> enhances usability </span>
                      but also enriches the overall user experience.
                    </p>
                    <p className="poppins-light text-green-500-custom text-lg">
                      The <span className=" text-white"> circular shape </span>{" "}
                      of the pins contributes to a{" "}
                      <span className=" text-white"> friendly </span> and
                      inviting interface, promoting a sense of community within
                      the study environment. By prioritizing accessibility
                      through thoughtful design choices, I aimed to create an
                      <span className=" text-white">
                        {" "}
                        engaging platform for all users
                      </span>
                      . The blend of color, size, and shape ensures that
                      everyone can interact confidently with the map,
                      effectively finding and utilizing study spots.
                    </p>
                  </div>
                </div>

                <div className="flex mt-14 flex-col lg:flex-row gap-8 lg:gap-24">
                  <div className="relative w-10/12 lg:w-1/2">
                    <img
                      className="w-full h-full object-contain"
                      src={image7}
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
                      Navigation Bar
                      {/* <span className=" text-white">enhance visibility </span> */}
                    </h1>
                    <p className="poppins-light text-green-500-custom text-lg">
                      For the desktop version, I designed the navigation bar to
                      align vertically along the left side, drawing inspiration
                      from the intuitive layout of the Google Maps navigation
                      bar. This choice promotes easy access to key features,
                      allowing users to navigate through options seamlessly
                      while maximizing screen space for the main content. The
                      search functionality is integrated prominently within the
                      navbar, enabling quick searches without disrupting the
                      overall user experience.
                    </p>
                    <p className="poppins-light text-green-500-custom text-lg">
                      In the mobile version, I opted for a fixed top navigation
                      bar to ensure that users can access essential functions
                      without needing to scroll. The search is represented as a
                      button, which, when tapped, expands to replace the
                      navigation bar with a search input field. This dynamic
                      interaction streamlines the mobile experience, making it
                      efficient and user-friendly. By adapting the design for
                      each platform, I aimed to maintain usability and
                      accessibility while ensuring that users can navigate and
                      search effortlessly, regardless of their device.
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
                      Use of MongoDB
                    </h1>
                    <p className="poppins-light text-green-500-custom text-lg">
                      The decision to use{" "}
                      <span className=" text-white">Mongoose</span> for defining
                      the studyspotSchema is based on its ability to create a
                      structured and validated schema for storing study spot
                      data in MongoDB. This schema includes key attributes like{" "}
                      <span className=" text-white">
                        key, name, and location{" "}
                      </span>{" "}
                      to ensure essential information is captured and can be{" "}
                      <span className=" text-white">easily queried </span>.
                    </p>
                    <p className="poppins-light text-green-500-custom text-lg">
                      Utilizing types such as Boolean for features (e.g., wifi,
                      outlets) provides{" "}
                      <span className=" text-white">
                        {" "}
                        clear data representation{" "}
                      </span>
                      , while enforcing required fields ensures data integrity.
                      The inclusion of comments as an array of objects allows
                      for{" "}
                      <span className=" text-white">
                        {" "}
                        flexible user feedback{" "}
                      </span>
                      , supporting a rating system and enhancing user
                      engagement. Overall, this schema design facilitates{" "}
                      <span className=" text-white">
                        {" "}
                        efficient data management and retrieval{" "}
                      </span>
                      , supporting the application's requirements for storing
                      and managing study spots effectively.
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
                      Use of AWS
                      {/* <span className=" text-white">enhance visibility </span> */}
                    </h1>
                    <p className="poppins-light text-green-500-custom text-lg">
                      The decision to use{" "}
                      <span className=" text-white"> AWS S3 </span> is driven by
                      its <span className=" text-white"> scalability </span>,{" "}
                      <span className=" text-white"> reliability </span>, and
                      secure storage for user-uploaded images. Hashing the
                      filename with sha256 ensures unique file names to{" "}
                      <span className=" text-white"> avoid conflicts </span>,
                      while protecting original filenames. Using
                      PutObjectCommand with the file buffer streamlines the
                      upload process, making it{" "}
                      <span className=" text-white">
                        efficient and well-suited for handling large volumes of
                        file uploads{" "}
                      </span>{" "}
                      in a web app environment.
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
                <h2 className="poppins-medium text-white text-2xl lg:mb-4">
                  <sup className="text-sm poppins-light align-super">05</sup>{" "}
                  Iterations
                </h2>
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2">
                    <p className="text-white text-lg poppins-medium lg:-mb-3 ml-4 lg:ml-7">
                      First Iteration
                    </p>
                    <img src={version1}></img>
                    <p className="text-green-500-custom text-lg ml-4 lg:ml-7 w-11/12 poppins-regular">
                      {" "}
                      In the first iteration, I chose to use the default Google
                      Maps API due to its extensive documentation and support.
                      However, I encountered a few issues. When fully zoomed
                      out, the map appeared unappealing and visually awkward.
                      Additionally, creating clusters was challenging and didn’t
                      work as expected. Lastly, there was no option to allow
                      users to customize the map’s style, such as switching
                      between 3D, 2D, or satellite views, which limited
                      flexibility.
                    </p>
                  </div>
                  <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <p className="text-white text-lg poppins-medium lg:-mb-3 ml-4 lg:ml-7">
                      Second Iteration
                    </p>
                    <img src={version2}></img>
                    <p className="text-green-500-custom text-lg ml-4 lg:ml-7 w-11/12 poppins-regular">
                      {" "}
                      In the second iteration, I switched to a different library
                      that leverages the Google Maps API under the hood. This
                      new API made it significantly easier to implement features
                      such as clusters, custom pins, and dynamic pin changes on
                      selection. It also provided a much more visually appealing
                      experience when fully zoomed out, offering users an
                      interactive globe to explore. Additionally, it allowed for
                      instant style changes according to user preferences, which
                      I now save in local storage, ensuring the settings persist
                      even when the user closes and reopens the application.
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
                  <sup className="text-sm poppins-light align-super">06</sup>{" "}
                  Challenges
                </h2>
                <p className="text-green-500-custom text-lg ml-6 poppins-regular">
                  While developing my study finder app using the MERN stack with
                  JWT authentication and cookies, I encountered several
                  challenges along the way. One of the main issues was{" "}
                  <span className="text-white poppins-medium">
                    managing authentication securely
                  </span>
                  , especially when storing JWT tokens in cookies. I had to
                  ensure that the cookies were{" "}
                  <span className="text-white poppins-medium">
                    {" "}
                    HTTP-only, secure, and properly configured{" "}
                  </span>
                  with expiration settings, which required careful handling to
                  avoid security vulnerabilities. Another challenge was dealing
                  with cross-origin resource sharing{" "}
                  <span className="text-white poppins-medium">
                    {" "}
                    (CORS) between the frontend, hosted on Vercel, and the
                    backend, hosted on Render{" "}
                  </span>
                  . I ran into a few CORS errors when trying to authenticate
                  users or send data between the two platforms, which took some
                  troubleshooting to resolve. Configuring environment variables
                  and secrets, like JWT keys, across Vercel and Render also
                  proved to be tricky at times, leading to some inconsistent
                  behavior during deployment. Managing session persistence and
                  token refreshing to keep users logged in securely, without
                  forcing them to constantly re-authenticate, was another
                  hurdle, especially when considering users switching between
                  devices or browsers. Lastly,{" "}
                  <span className="text-white poppins-medium">
                    {" "}
                    deployment challenges{" "}
                  </span>{" "}
                  came up, such as ensuring server-side rendering (SSR) worked
                  smoothly on Vercel, dealing with database connection timeouts
                  on Render, and{" "}
                  <span className="text-white poppins-medium">
                    preparing the app to scale as it grows{" "}
                  </span>
                  , all of which added extra layers of complexity to the
                  project.
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
                  Building this application has been a highly rewarding
                  experience, providing me with valuable insights into{" "}
                  <span className="text-white poppins-medium">
                    {" "}
                    full-stack development
                  </span>{" "}
                  and the intricacies of modern web applications. One major
                  takeaway was the importance of securely managing user
                  authentication, particularly how to properly store and handle
                  tokens and cookies to ensure both security and seamless user
                  experiences. I also learned how to effectively troubleshoot{" "}
                  <span className="text-white poppins-medium">CORS issues</span>
                  , which often come up when working with separate frontend and
                  backend deployments, especially when they’re hosted on
                  different platforms like{" "}
                  <span className="text-white poppins-medium">Vercel</span> and{" "}
                  <span className="text-white poppins-medium">Render</span>.
                  Deploying the app across these platforms taught me the
                  significance of configuring{" "}
                  <span className="text-white poppins-medium">
                    environment variables
                  </span>{" "}
                  correctly and ensuring smooth integration between services. I
                  gained a deeper understanding of how to manage{" "}
                  <span className="text-white poppins-medium">
                    session persistence
                  </span>{" "}
                  and refresh tokens for a more user-friendly experience.
                  Additionally, dealing with{" "}
                  <span className="text-white poppins-medium">
                    deployment challenges
                  </span>
                  , such as optimizing performance for{" "}
                  <span className="text-white poppins-medium">
                    server-side rendering
                  </span>{" "}
                  and addressing{" "}
                  <span className="text-white poppins-medium">scalability</span>
                  , helped me appreciate the complexities of hosting and
                  maintaining a live application. Overall, this project enhanced
                  my technical skills and reinforced the importance of planning
                  for{" "}
                  <span className="text-white poppins-medium">security</span>,{" "}
                  <span className="text-white poppins-medium">scalability</span>
                  , and{" "}
                  <span className="text-white poppins-medium">
                    user experience
                  </span>{" "}
                  from the very beginning.
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
