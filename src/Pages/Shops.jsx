import React, { useState } from "react";
import data from "./FakeData.json";

import CardComponent from "../Component/CardComponent";
import Sidebar from "../Component/Sidebar";

const Shops = () => {
  const [category, setCategory] = useState("all");
  const [count, setCount] = useState(0);

  const handleButtonClick = (category) => {
    setCategory(category);
  };
  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const filteredItems =
    category === "all" ? data : data.filter((item) => item.category === category);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between flex-col md:flex-row">

      <div className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-3 gap-5 order-2 md:order-1">
        {filteredItems.map((ele) => (
          <CardComponent
          cardDescription={ele.category}
          cardtitle={ele.name}
          cardImg={ele.img}
          rating={ele.ratings}
          price={ele.price}
          onAddToCart={handleAddToCart}
          />
          ))}
      </div>
      <div className="order-1 md:order-2">
        <Sidebar count={count}/>
      </div>
          </div>
    </div>
  );
};

export default Shops;
