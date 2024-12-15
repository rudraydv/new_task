import React from "react";

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Smartphone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
