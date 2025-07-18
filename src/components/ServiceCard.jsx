const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-col items-start justify-center rounded-[20px] flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-3xl px-10 py-16 ">
      <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full flex mt-5">
        <img
          src={imgURL}
          alt="{label}"
          width={24}
          height={24}
          className="object-center object-contain"
        />
      </div>

      <h3 className="font-palanquin text-3xl font-semibold">{label}</h3>
      <p className="font-montserrat text-slate-gray leading-normal break-words mt-3 text-lg">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
