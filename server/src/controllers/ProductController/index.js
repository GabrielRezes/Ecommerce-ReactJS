const Products = require('../../models/Products');

const ProductController = {
  
  async createProduct (req, res) {
    
    const data = req.body;

    try {
      const newProduct = await Products.create(data);

      return res.status(200).send(newProduct);

    } catch(err) {
      res.status(400).send(err);
    };
  },  

  async getProducts (req, res) {
    try {
      console.log('passou')
      const allProducts = await Products.find();
  
      return res.status(200).send(allProducts); 
      
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

module.exports = ProductController;