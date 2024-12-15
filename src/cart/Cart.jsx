import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import { fetchAsync,deleteAsync } from "./cartSlice";

const Cart = () => {

    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsync());
    },[dispatch]);


return (
   <>
 {items.map((data) => (
  <div
    key={data.id}
    className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4"
  >
    {/* Product Image */}
    <div className="w-1/4">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-auto object-cover rounded-md"
      />
    </div>

    {/* Product Details */}
    <div className="w-1/2 px-4">
      <h1 className="text-lg font-semibold mb-2 text-gray-800">
        {data.title}
      </h1>
      <p className="text-gray-600 text-sm">{data.description}</p>
      <span className="text-green-500 font-semibold text-xl">
        ${data.price}
      </span>
    </div>

    {/* Quantity Selector */}
    <div className="w-1/4 flex flex-col items-center">
      <span className="text-gray-800 font-medium mb-2">Quantity</span>
      <select
        name="quantity"
        id={`quantity-${data.id}`}
        className="border border-gray-300 rounded-md p-2"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <div className="">
        <button onClick={() =>dispatch(deleteAsync(data.id))} className="bg-red-500 text-white px-4 py-2 rounded">delete</button>
      </div>
    </div>
  </div>
))}

   </>
  );
};

export default Cart;
