const product = require('./product.controller');
const category = require('./category.controller');
const auth = require('./auth.controller');

module.exports = {
  category,
  product,
  auth,
};