import React from "react";
import Headings from "../Headings/Headings";
import fruitCat from "../../assets/fruits-and-veggies.png";
import dairyEggs from "../../assets/dairy-and-eggs.png";
import meatSeafood from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";

const Category = () => {
  const renderCard = category.map((Card) => {
    return (
      // Card
      <div className="flex-1" key={Card.id}>

        {/* Card Image */}
        <div className="w-full min-h-[30vh]  relative -mb-10">
          <img src={Card.img} className="absolute bottom-0" />
        </div>

        {/* Card Content */}
        <div className="bg-zinc-200 pt-17 p-8 rounded-xl">
          <h3 className="md:text-3xl text-2xl text-zinc-800 font-bold">{Card.title}</h3>
          <p className="text-zinc-500 md:mt-5 mt-3 md:mb-10 mb-7">{Card.discription}</p>
          <Button content="View All" />
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 md:py-15 py-10">
        <Headings highlight="Shop" headings=" By Category" />

        {/* Category card */}
        <div className="flex md:flex-row flex-col md:gap-10 gap-6 md:mt-10 -mt-6">{renderCard}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    discription:
      "Fresh, organic produce sourced daily fromlocal farms. Explore awide range of seasonal fruts and crisp vegetbles.",
    img: fruitCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    discription:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogort to artisanal cheeses.",
    img: dairyEggs,
  },
  {
    id: 3,
    title: "Meat & Sea Food",
    discription:
      "High qulity , responsibly sourced meat and seafod. Choodse from fresh cuts , marinated options, and More.",
    img: meatSeafood,
  },
];
