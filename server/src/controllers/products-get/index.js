const Products = require('../../models/Products');

module.exports = async (req, res) => {
  try {
    console.log('passou')
    const allProducts = await Products.find();

    return res.status(200).send(allProducts); 
    
  } catch (err) {
    res.status(400).send(err);
  }
};
