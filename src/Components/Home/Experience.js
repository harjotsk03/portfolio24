export const Experience = () => {
  const experience = [
    {
      date: "August 2024 - Present",
      name: "Founder, StudySpotr",
      description:
        "Developed a full-stack application to help users find study or work spots globally, with features like user ratings, Wi-Fi access, and power outlet availability. Integrated Google Maps API for interactive location markers and improved backend efficiency, reducing data fetch times by 88% and response times by 78%. Collaborated with a team to enhance user experience, driving user engagement and growth beyond the initial 10 users.",
    },
    {
      date: "February 2024 - Present",
      name: "Director of Web Development, SFU Robot Soccer",
      description:
        "Redesigned and developed the SFU Robot Soccer website, significantly enhancing user experience, mobile responsiveness, and overall site functionality. Collaborated closely with the club president and executives to align the content and design with the organization's goals. As a result, user engagement doubled, mobile accessibility vastly improved, and website traffic increased by 55%. The new design and functionality fostered stronger user retention and a more seamless browsing experience across all devices.",
    },
    {
      date: "January 2024 - Present",
      name: "Student Software Developer, SFU CS Student Society",
      description:
        "Redesigned and unified the UI components across the SFU CS Student Society website, creating a cohesive and streamlined user experience. Improved development efficiency by 72% by enabling developers to reuse components with customizable parameters. Enhanced the system's maintainability and scalability by implementing best practices in code design and architecture, ensuring long-term stability and ease of future development. Collaborated with the team to optimize performance and deliver a more intuitive experience for users.",
    },
  ];
  return (
    <div className="lg:px-52 px-4 pt-20 w-full overflow-x-hidden z-20 relative flex flex-col items-start justify-center">
      <h1 className="text-white text-[11vw] lg:text-5xl poppins-medium mb-10">
        <sup className="text-sm poppins-light align-super">02</sup> Experience
      </h1>
      {experience.map((role, index) => (
        <div className="lg:px-8 px-4 mb-14" key={index}>
          <h2 className="poppins-regular text-green-100-custom">{role.date}</h2>
          <h1 className="text-3xl poppins-medium text-white mt-1">
            {role.name}
          </h1>
          <p className="text-white poppins-light text-lg leading-relaxed mt-4">
            {role.description}
          </p>
        </div>
      ))}
    </div>
  );
};
