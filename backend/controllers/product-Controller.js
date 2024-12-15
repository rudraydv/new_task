const Product = require('../models/product-Model');
const mongoose = require('mongoose');
//const mongoose = require('mongoose');


// create product
// exports.createProduct = async(req,res) =>{
//     const product = new Product(req.body);
//    await product.save((err,doc) =>{
//         console.log({err,doc});
//         res.status(201).json(doc);
//     });
    
// };


exports.createProduct = async (req, res) => {

    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (err) {
        console.log(err);
      res.status(500).json({ error: err.message });
    }
  };


// get getAllProducts
exports.getAllProducts = async(req,res) => {

  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    console.log(error);
    res.json(201).json(error);
  }
}


// get single product by id
exports.getProduct = async(req,res) => {
const product = await Product.findById(req.params.id);
res.json(product); 
}


// replace product

exports.replaceProduct = async(req,res) => {
  const id = req.params.id;

  try {
   const product = await Product.findOneAndReplace({ _id:id},req.body)
    res.status(201).json({message:"product Replace Successfully",product});
    
  } catch (error) {
    console.log('error replacing product',error);
    res.status(400).json({message:'server error',error})
    
  }
}

// update products by id and index
exports.updateProduct =  async(req,res) => {
  const id = req.body.id;
  try {
    const product = await Product.findOneAndUpdate({_id:id}, req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
    
  }
}

// delete product
exports.deleteProduct = async(req,res) => {

    try {
      let product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      await product.deleteOne();
      res.status(200).json({ message: "Product deleted successfully", product });
      
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: "Server error", error });
      
    }
}