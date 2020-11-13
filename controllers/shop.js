const Product = require('../models/product');




exports.getProducts = (req, res, next) => {
   Product.fetchAll(products => {
      res.render('shop/product-list',{
        prods: products, 
        pageTitle : 'ALL PRODUCTS', 
        path: '/products'
      }); // pug is set as the default template item, so .put does not need to be added after 'shop'
    });
  };

  exports.getProduct = (req,res,next) => {
    const prodId = req.params.productId; //can access producId from inside the routes where it was created. params is a built in to receiving paramerters from the req function.
    
    Product.findById(prodId, product=> {
      res.render('shop/product-detail',{product: product, pageTitle: product.title, path: '/products'}); //renders the product detail page with the dynamic information passed to it and a unique id as well. Product in the details ejs file is set to the product data received in the function so it can be passed and rendered.
    })
    
  }

  exports.getIndex = (req,res,next) => {
    Product.fetchAll(products => {
      res.render('shop/index',{
        prods: products, 
        pageTitle : 'Shop', 
        path: '/'
      }); 
    });
  }

  exports.getCart = (req,res,next) => {
    
      res.render('shop/cart',{
        
        path: '/cart',
        pageTitle : 'Your Cart'
      }); 
    
  }

  exports.postCart = (req,res,next) => {
      const prodId = req.body.productId;
      res.redirect('/cart');
  };

  exports.getCheckout = (req,res,next) => {
    
      res.render('shop/checkout',{
        prods: products, 
        pageTitle : 'Checkout', 
        path: '/checkout'
      }); 
  }

  exports.getOrders = (req,res,next) => {
    
    res.render('shop/orders',{
      path: '/orders',
      pageTitle : 'Your Orders'
      
    }); 
  
}






  
