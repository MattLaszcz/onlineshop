const products = [];
const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data','products.json');

const getProductsFromFIle = (cb) => {
  const p = path.join(path.dirname(process.mainModule.filename), 'data','products.json');
  fs.readFile(p,(err, fileContent) => {
    if (err) {
      //return [];

      return cb([]) //cb is a callback function in products.js that is a function that handles the data in the array to avoid getting an error of checking the length of an undefined array
    }
    //return JSON.parse(fileContent);
    cb(JSON.parse(fileContent));
  })           
          // static lets you call the function only on the class itself. 

}

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

    save() {
      getProductsFromFIle(products => {
        //need an arrow function here so this does not lose its content
        //let products = [];
        products.push(this);
        fs.writeFile(p, JSON.stringify(products),(err) => {
          console.log(err);
        });//stringify converts a JS object or arrat bac
      });      
  
      
      //products.push(this);
  }

    static fetchAll(cb) {    
      getProductsFromFIle(cb);
    }
}