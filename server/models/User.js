const mongoose = require('mongoose');

// Creating Collection 'Users'
const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
})

module.exports = User;