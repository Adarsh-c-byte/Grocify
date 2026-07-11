import React from "react";
import Headings from "../Headings/Headings";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiPlantFill } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Process = () => {
  const renderSteps = steps.map((item) => {
    return (
      <div className={`flex-1 ${item.id % 2 === 0 ? '-mt-50' : ''}`}>
        <span className="flex justify-center items-center h-16 w-16 text-7xl text-white bg-zinc-800 rounded-full outline-dashed outline-zinc-800 outline-offset-7 mx-auto">{item.number}</span>

        <div className="flex items-center mt-6 gap-5">

       
            <span className="flex justify-center items-center text-3xl text-white p-4 rounded-full bg-gradient-to-b from-orange-400 to-orange-600">{item.icon}</span>
        

          <div>

            <h3 className="text-2xl font-bold text-zinc-800">{item.title}</h3>
            <p className="text-zinc-600">{item.para}</p>

          </div>

        </div>

      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">

        <div className="w-fit mr-auto">

          <Headings highlight="Our" headings=" Process" />

        </div>

        <div className="flex mt-20 pt-50 gap-5 justify-between">{renderSteps}</div>

      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long eshtablished factor that a reader",
    icon: <PiPlantFill />,
  },

  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long eshtablished factor that a reader",
    icon: <MdFactory />,
  },

  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long eshtablished factor that a reader",
    icon: <RiVerifiedBadgeFill />,
  },

  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: " Logistics",
    para: " It is a long eshtablished factor that a reader",
    icon: <FaTruck />,
  },
];
