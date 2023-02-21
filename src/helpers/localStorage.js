export const saveStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

export const clearStorage = (key) => {
  localStorage.setItem(key, JSON.stringify({
    name: '',
    token: '',
    userId: ''
  }));
}