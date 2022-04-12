const bcrypt = require('bcrypt');

const createPasswordHash = async (password) => bcrypt.hash(password, 8);

const checkPassword = async (password, user) => bcrypt.compare(password, user.password);

module.exports = {
  createPasswordHash,
  checkPassword
};