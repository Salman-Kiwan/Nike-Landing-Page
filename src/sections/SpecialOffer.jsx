import { Button } from "../components";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className=" max-container max-xl:flex-col-reverse justify-wrap flex gap-10 w-full items-center">
      <div className="flex flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object.contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col  justify-start">
        <h2 className="text-4xl font-palanquin font-bold  capitalize lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray "
            textColor="text-slate-gray"
            className=" hover:bg-slate-gray  hover:text-white hover:border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
