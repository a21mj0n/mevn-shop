const { model, Schema, Schema: {Types: {ObjectId}} } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  products: [
    {
      type: ObjectId,
      ref: 'Product'
    }
  ],
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString()
  }
});

module.exports = model('Category', schema);