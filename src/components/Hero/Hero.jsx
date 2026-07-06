import React from "react";
import grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="min-h-screen md:pt-25 pt-30 max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col justify-between items-center">
        {/* hero content */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/20 text-5xl/14 mt-4 font-bold">
            Testy Organic <span className="text-orange-500">Fruit</span> &{" "}
            <span className="text-orange-500">Veggies</span> <br /> In Your City
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[540px] md:mt-5 md:mb-10 mt-3 mb-7">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop Now"/>
        </div>
        {/* hero image */}
        <div className="flex-1 md:mt-0 mt-3">
          <img src={grocery} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
