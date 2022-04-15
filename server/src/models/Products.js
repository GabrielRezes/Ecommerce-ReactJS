const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  productImage: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Product', Schema);