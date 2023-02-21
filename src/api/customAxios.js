import axios from "axios";
import { getStorage } from "@/helpers/localStorage";
const BASE_URL = 'https://apartments-api.onrender.com';

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getCities = async () => {
  const data = await axios.get('/cities').then(response => response.data);
  return data;
};

export const getApartments = async () => {
  const data = await axios.get('/apartments').then(response => response.data);
  return data;
};

export const getApartmentById = async (id) => {
  const data = await axios.get(`/apartments/${id}`).then(response => response.data);
  return data;
};

export const registerUser = async (values) => {
  const { data } = await axios.post('/auth/register', values);
  token.set(data.token);
  return data;
};

export const loginUser = async (values) => {
  const { data } = await axios.post('/auth/login', values);
  token.set(data.token);
  return data;
};

export const logoutUser = async () => {
  const currToken = getStorage('user').token;
  token.set(currToken);
  await axios.post('/auth/logout');
  token.unset();
};

export const getOrders = async () => {
  const currToken = getStorage('user').token;
  token.set(currToken);
  const data = await axios.get('/orders').then(response => response.data);
  if (!data) {
    return [];
  }
  return data.items;
}

export const addOrder = async (id) => {
  const currToken = getStorage('user').token;
  token.set(currToken);
  await axios.post('/orders', { apartmentId: id }).then(response => response.data);
  return true;
}