import React from "react";
import { PackageCheck } from "lucide-react";
import { Leaf } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Sprout } from "lucide-react";
import Headings from "../Headings/Headings";
import basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex md:flex-row-reverse justify-between md:items-center gap-7">
        <div>
          <span className="flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 md:h-14 md:w-14 h-12 w-12 rounded-full text-white ">{item.icon}</span>
        </div>
        <div className="md:text-right">
          <h3 className="md:text-3xl text-2xl font-bold text-zinc-800 md:mb-2 mb-1">{item.title}</h3>
          <p className="text-zinc-600">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = value.slice(2, 4).map((item) => {
    return (
      <div key={item.id} className="flex justify-between md:items-center gap-7" >
        <div>
          <span className="flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 md:h-14 md:w-14 h-12 w-12 rounded-full text-white ">{item.icon}</span>
        </div>
        <div >
          <h3 className="md:text-3xl text-2xl font-bold text-zinc-800 md:mb-2 mb-1">{item.title}</h3>
          <p className="text-zinc-600">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-15">
        <Headings highlight="Our" headings=" Values" />

        <div className="flex md:flex-row flex-col md:gap-4 gap-15 md:mt-15 mt-10">
          {/* left values */}
          <div className=" flex md:min-h-100 flex-col md:justify-between gap-15">{leftValues}</div>
          {/* image */}
          <div className="md:flex w-1/2 hidden">
            <img src={basket} />
          </div>
          {/* right values */}
          <div className=" flex md:min-h-100 flex-col md:justify-between gap-15">{rightValues}</div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: "1",
    title: "Trust",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, reprehenderit sunt.",
    icon: <PackageCheck />,
  },

  {
    id: "2",
    title: "Always Fresh",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, reprehenderit sunt.",
    icon: <Leaf />,
  },

  {
    id: "3",
    title: "Food Safety",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, reprehenderit sunt.",
    icon: <ShieldCheck />,
  },

  {
    id: "4",
    title: "100% Organic",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, reprehenderit sunt.",
    icon: <Sprout />,
  },
];
