import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);


  const deleteProduct = async (id) => {
    if (!id) {
      console.error("Product ID is undefined");
      return;
    }
  
    try {
      const res = await axios.delete(`http://localhost:8080/api/auth/products/${id}`);
      console.log("Deleted Product:", res.data);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/auth/products');
      console.log("All products",response.data);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/auth/products");
        console.log("Fetched Products:", res.data); // Check the response
        setProducts(res.data); // Ensure res.data contains an array with _id
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg p-2 shadow-lg flex flex-col space-y-2"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover object-center rounded-md"
            />
         <div className='h-40'>
               {/* Product Details */}
               <div>
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p className="text-gray-600  text-sm">{item.description}</p>
            </div>
            <div className="">
                <div className='flex items-center justify-between'>
                <span className="text-sm">
                <strong>Price:</strong> ${item.price}
              </span>
              <span className="text-sm">
                <strong>Discount:</strong> {item.discountPercentage}%
              </span>
                </div>
              <div className='flex items-center justify-between  space-y-2'>
              <span className="text-sm">
                <strong>Rating:</strong> {item.rating} / 5
              </span>
              <span className="text-sm">
                <strong>Stock:</strong> {item.stock}
              </span>
              </div>
             <div className='flex flex-col'>
             <span className="text-sm">
                <strong>Category:</strong> {item.category}
              </span>
              <span>
                <strong>brand:</strong>{item.brand}
              </span>
             </div>
            </div>
         </div>
            <div className='my-4 flex items-center justify-between text-xs'>
            <button className="mt-auto bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition">
              Add to Cart
            </button>
            <button onClick={() => deleteProduct(item._id)}  className="mt-auto bg-red-500 text-white py-2 px-4 hover:bg-red-600 transition">
              delete to cart
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
