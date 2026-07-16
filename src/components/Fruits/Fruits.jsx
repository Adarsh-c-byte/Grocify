import React from "react";
import BgFruits from "../../assets/fruits-banner.jpg";
import CategoryPage from "../CategoryPage/CategoryPage";

const Fruits = () => {
  return (
    <CategoryPage
      title="Fruits & Vegies"
      bgImage={BgFruits}
      categories={["Fruit","Vegetable"]}
    />
  );
};

export default Fruits;