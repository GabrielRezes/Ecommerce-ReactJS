const Product = require('../../models/Products');

module.exports = async (req, res) => {
  
  const data = req.body;
  
  try {

    const newProduct = await Product.create(data);

    return res.status(200).send(newProduct);


  } catch(err) {
    res.status(400).send(err)
  };
};