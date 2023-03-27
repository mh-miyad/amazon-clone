import React, { useState } from "react";
import data from "./FakeData.json";

import CardComponent from "../Component/CardComponent";
import Sidebar from "../Component/Sidebar";

const Shops = () => {


  const [cart, setCart] = useState([]);
  const [cart1, setCart1] = useState([]);
  const eventHandlar =(id)=>{
    const newCart = [...cart,id]
    const newCart1 = [...cart,id]
    newCart.map( ele =>  setCart(ele))
    
    setCart1(newCart1)
    
  }



 
  return (
    <div className="container mx-auto flex justify-center gap-5">
      <div className="flex justify-between flex-col md:flex-row gap-5">

      <div className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-3 gap-5 order-2 md:order-1">
        {data.map((ele) => (
          <CardComponent
          key={ele.id}
          cardDescription={ele.category}
          cardtitle={ele.name}
          cardImg={ele.img}
          rating={ele.ratings}
          price={ele.price}
          id={ele}
          eventHandlar={eventHandlar}

          />
          ))}
      </div>
      <div className="order-1 md:order-2 ">
        {

        <Sidebar orderItem={cart1.length} price={cart.price} charge={cart.charge}/>
        }

        
      </div>
          </div>
    </div>
  );
};

export default Shops;
