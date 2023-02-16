import axios from "axios";
const BASE_URL = 'https://apartments-api.onrender.com';

axios.defaults.baseURL = BASE_URL;

export const getCities = async () => {
  const data = await axios.get('/cities').then(response => response.data);
  return data;
}

export const getApartments = async () => {
  const data = await axios.get('/apartments').then(response => response.data);
  return data;
}