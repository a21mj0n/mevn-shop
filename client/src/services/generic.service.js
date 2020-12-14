import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const request = async ({ url, method, data = {} }) => {
  const response = await axios[method](`${API_BASE_URL}/${url}`, data);
  if (response.statusText !== 'OK') {
    throw new Error(response.message);
  }
  return response;
};
