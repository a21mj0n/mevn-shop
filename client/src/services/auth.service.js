import { request } from './generic.service';

const register = (body) => request({ url: 'auth/register', method: 'post', data: body });
const login = (body) => request({ url: 'auth/login', method: 'post', data: body });

export {
  register,
  login,
};
