const storage = localStorage;

const keys = {
  token: "@youx/token",
};

export const storageSetToken = (jwt) => {
  storage.setItem(keys.token, jwt);
};

export const storageGetToken = () => {
  return storage.getItem(keys.token);
};
