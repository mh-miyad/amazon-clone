import { Button } from "flowbite-react";
import React from "react";

const Sidebar = ({ charge}) => {
  let grandTotal = 0;
  let total = 0;
  let shipping =  0;
  let quantity =0;
  for (const product of charge) {
    product.quantity =  product.quantity || 1;
    total = total + (product.price * product.quantity);
    shipping = shipping + (product.shipping);
     grandTotal  = total + (total * 0.05);
     quantity = quantity + product.quantity;
  }
  return (
    <div className="my-10 sticky top-5">
      <div className="border-4 rounded-lg border-indigo-900  bg-indigo-600/80  font-bold shadow-2xl shadow-indigo-600  ">
        <div className="p-3">
          <h4 className="text-3xl px-5 py-2 my-6 bg-white/80 shadow-xl shadow-black/20 rounded-xl text-gray-800 border-4 border-gray-500 capitalize">
            Order Summary
          </h4>
          <p className="text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-3  py-2 my-5">
            Selected Items:
            <span className="text-2xl font-bold mx-10">{quantity}</span>
          </p>
          <p className="text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-3  py-2 my-5">
            Total Price:
            <span className="text-2xl font-bold mx-10">{total}</span>
          </p>
          <p className="text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-3  py-2 my-5">Tax:
            <span className="text-2xl font-bold mx-10">$ 5</span>
          </p>
          <p className="text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-3  py-2 my-5">
            Total Shipping : 
            <span className="text-2xl font-bold mx-10">{shipping}</span>
          </p>
          <p className="text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-3  py-2 my-5">
            Grand Total: 
            <span className="text-2xl font-bold mx-10">${grandTotal.toFixed()}</span>
          </p>
          <div className="flex justify-around">
            <Button color={'failure'} className='shadow-2xl shadow-black/30'> Remove Item</Button>
            <Button color={'success'} className='shadow-2xl shadow-black/30'> Confirm Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
