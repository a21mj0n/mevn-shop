import { request } from './generic.service';

const getProduct = (id) => request({ url: `proudcts/${id}`, method: 'get' });
const getProducts = () => request({ url: 'products', method: 'get' });
const editProduct = (id, body) => request({ url: `products/${id}`, method: 'put', data: body });
const deleteProduct = (id) => request({ url: `products/${id}`, method: 'delete' });
const createProduct = (body) => request({ url: 'products', method: 'post', data: body });

export {
  getProduct,
  getProducts,
  editProduct,
  deleteProduct,
  createProduct,
};
