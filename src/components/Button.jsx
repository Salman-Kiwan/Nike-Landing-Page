const Button = ({
  label,
  iconURL,
  backgroundColor = "bg-coral-red",
  textColor = "text-white",
  borderColor = "border-coral-red",
}) => {
  const hoverBg = textColor.replace("text-", "bg-");
  const hoverText = backgroundColor.replace("bg-", "text-");

  return (
    <button
      className={`
        flex justify-center items-center gap-2 px-7 py-4 border rounded-full
        font-montserrat text-lg leading-none cursor-pointer
        ${backgroundColor} ${textColor} ${borderColor}
        hover:${hoverBg} hover:${hoverText} hover:${borderColor}
        transition-all  duration-300  active:opacity-[0.5]
      `}
    >
      {label}
      {iconURL && (
        <span
          className={`
            ml-2 p-1 rounded-full transition-colors duration-300
            ${backgroundColor} hover:${hoverBg}
          `}
        >
          <img src={iconURL} alt="icon" className="w-5 h-5" />
        </span>
      )}
    </button>
  );
};

export default Button;
