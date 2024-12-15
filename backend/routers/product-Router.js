const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-Controller');


router.route('/products').post(productController.createProduct);
router.route('/products').get(productController.getAllProducts);
router.route('/products/:id').get(productController.getProduct);
router.route('/products/:id').put(productController.replaceProduct);
router.route('/products/:id').put(productController.updateProduct);
router.route('/products/:id').delete(productController.deleteProduct);

module.exports = router;
