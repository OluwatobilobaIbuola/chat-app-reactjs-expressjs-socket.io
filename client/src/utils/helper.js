export const userToken = () => {
  const user = localStorage.getItem("user");

  if (user) return JSON.parse(user)?.token;
};

export const getUser = () => {
  const user = localStorage.getItem("user");

  if (user) return JSON.parse(user);
};

export const setUser = (user) => {
  const stringifyData = JSON.stringify(user);
  localStorage.setItem("user", stringifyData);
};
