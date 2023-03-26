import React from "react";
import data from "./FakeData.json";

import CardComponent from "../Component/CardComponent";
import Sidebar from "../Component/Sidebar";

const Shops = () => {

 
  return (
    <div className="container mx-auto">
      <div className="flex justify-between flex-col md:flex-row">

      <div className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-3 gap-5 order-2 md:order-1">
        {data.map((ele) => (
          <CardComponent
          cardDescription={ele.category}
          cardtitle={ele.name}
          cardImg={ele.img}
          rating={ele.ratings}
          price={ele.price}
          />
          ))}
      </div>
      <div className="order-1 md:order-2">
        <Sidebar/>
      </div>
          </div>
    </div>
  );
};

export default Shops;
