const ButtonWithTooltip = ({ icon, tooltip, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative group inline-block" key={tooltip}>
        <div className="hidden lg:flex bg-green-100-custom poppins-regular bg-opacity-70 text-green-400 text-opacity-80 px-2 py-1 text-xs rounded-lg absolute -top-9 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-500">
          {tooltip}
        </div>
        <button className="text-green-100-custom opacity-30 p-3 rounded-full hover:bg-white hover:bg-opacity-5 hover:opacity-90 transition duration-300 ease-in-out">
          {icon}
        </button>
      </div>
    </a>
  );
};

export default ButtonWithTooltip;
