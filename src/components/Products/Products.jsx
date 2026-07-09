import React, { useState } from "react";
import Headings from "../Headings/Headings";
import ProductList from "../ProductList/ProductList";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Products = () => {
  const categories = ["All", "Fruit", "Vegetable", "Dairy", "Sea Food"];
  const [activeTag, setActiveTag] = useState("All");

  let filterLists = activeTag === 'All' 
  ? ProductList : ProductList.filter(item=>item.category === activeTag)

  const renderCard = filterLists.slice(0, 8).map((product) => {
    return (
      <Card
        image={product.image}
        title={product.title}
        price={product.price}
        key={product.id}
      />
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Headings highlight="Our" headings=" Products" />

        <div className="flex justify-center gap-5 mt-10">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`bg-zinc-200 px-5 py-2 text-lg rounded-lg  hover:scale-105 
                        ${activeTag === category ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white" : "bg-zinc-200"}`}
                onClick={() => setActiveTag(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product Listing */}

        <div className="grid grid-cols-4 gap-5 mt-15">{renderCard}</div>

        <div className="mt-15 mx-auto w-fit">
          <Button content="View All" />
        </div>
      </div>
    </section>
  );
};

export default Products;
