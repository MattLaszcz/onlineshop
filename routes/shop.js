const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const shopController = require('../controllers/shop');

const router = express.Router();

//const adminData = require('./admin');


// routes are located at /admin/products or /admin/cart...etc => GET
router.get('/', shopController.getIndex) 

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct); // colon means not to look for a route but that section will generate that path dynamically for that id value, specific non dynamic routes that rely on the dynamic route must be place/parsed first in the code FYI

router.get('/cart',shopController.getCart);

router.post('/cart',shopController.postCart);

router.get('/orders',shopController.getOrders);

router.get('/checkout',shopController.getCheckout);

module.exports = router;
