const mongoose = require('mongoose');
require('dotenv').config();

const dbAddress = process.env.DB_ADDRESS;

module.exports = async () => {
  mongoose.connect(dbAddress)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB not connected'));
};