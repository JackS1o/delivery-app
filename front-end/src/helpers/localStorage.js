const USER_KEY = 'user';

export const getUserFromLS = () => {
  const user = localStorage.getItem(USER_KEY);
  if (!user) return null;
  return JSON.parse(user);
};

export const createLocalStorage = () => {
  const user = localStorage.getItem(USER_KEY);
  if (!user) {
    localStorage.setItem(USER_KEY, '');
  }
};

createLocalStorage();

export const saveUserOnLS = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};
