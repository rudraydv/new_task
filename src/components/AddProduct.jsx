import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    discountPercentage: '',
    description: '',
    category: '',
    brand: '',
    image: null,
  });

  const categories = ['Electronics', 'Clothing', 'Books', 'Beauty'];
  const brands = ['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    addProduct(product);
    alert('Product Added Successfully');
  };

  const addProduct = async(product) =>{
    try {
        const res = await axios.post('https://new-task-phi.vercel.app/api/auth/products',product)
        console.log(res.data);
    } catch (error) {
        console.log('error fetching',error);
    }
  }

 

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-3 space-y-2"
      >
        <h1 className="text-2xl font-bold text-gray-700">Add Product</h1>
        
        <div>
          <label className="block text-gray-600 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded focus:outline-none"
            placeholder="Enter product title"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter product price"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Discount Percentage</label>
          <input
            type="number"
            name="discountPercentage"
            value={product.discountPercentage}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter discount percentage"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product description"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Brand</label>
          <select
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Image</label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
