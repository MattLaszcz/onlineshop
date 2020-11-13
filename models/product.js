const products = []; //no longer used data pushed to JSON file in /data
const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data','products.json');

const getProductsFromFile = (cb) => {
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
  constructor(title, imageURL, description, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }

    save() {
      this.id = Math.random().toString();
      getProductsFromFile(products => {
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
      getProductsFromFile(cb);
    }

    static findById(id,cb) { //Static methods are called without instantiating their class and are also not callable when the class is instantiated. Static methods are often used to create utility functions for an application.” In other words, static methods have no access to data stored in specific objects.
      getProductsFromFile(products=> {
        const product = products.find(p => p.id === id);
        cb(product);
      })
    }
}