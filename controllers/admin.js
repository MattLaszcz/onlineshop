const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('admin/add-product',{   //renders the /add-product html...in this case its an ejs file 
    pageTitle: 'Add Product',   //dynaimically insterts the page title into the html ejs is used in this case
    path: '/admin/add-product', 
    formsCSS: true, 
    productCSS: true, 
    activeAddProduct: true
  });
}


exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;
  
  const product = new Product(title,imageURL,price,description);
  product.save();
  res.redirect('/');
  
}

exports.getProducts = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('admin/products',{
      prods: products, 
      pageTitle : 'Admin Products', 
      path: '/admin/products',
    }); 
  });
}