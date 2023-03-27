import React from "react";

const Sidebar = ({ order, orderItem, price ,charge,tax }) => {
  return (
    <div className="my-10 mx-5">
      <div className="border-4 rounded-lg border-indigo-900  bg-indigo-600/80  font-bold shadow-2xl shadow-indigo-600 ">
        <div className="p-5">
          <h4 className="text-3xl px-5 py-2 my-6 bg-white/80 shadow-xl shadow-black/20 rounded-xl text-gray-800 border-4 border-gray-500 capitalize">
          Order Summary
          </h4>
          <p className="text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-3  py-2 my-5">
            Selected Items:
            <span className="text-2xl font-bold mx-10">{orderItem}</span>
          </p>
          <p className="text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-3  py-2 my-5">
            Total Price:
            <span className="text-2xl font-bold mx-10">{price + ( price)}</span>
          </p>
          <p className="text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-3  py-2 my-5">
            <span className="text-2xl font-bold mx-10">Tax:$5</span>
          
          </p>
          <p className="text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-3  py-2 my-5">
          Total Shipping Charge: ${parseInt(price)*0.05}
            <span className="text-2xl font-bold mx-10">{tax}</span>
          </p>
          <p className="text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-3  py-2 my-5">
           Grand Total:
            <span className="text-2xl font-bold mx-10">{}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
