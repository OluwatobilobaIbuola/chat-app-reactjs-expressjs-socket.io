export const base = process.env.REACT_APP_BASE_URL;
export const loginRoute = `${base}/api/auth/login`;
export const registerRoute = `${base}/api/auth/register`;
export const logoutRoute = `${base}/api/auth/logout`;
export const allUsersRoute = `${base}/api/users/get_users`;
export const sendMessageRoute = `${base}/api/messages`;
export const receiveMessageRoute = `${base}/api/messages`;
export const setImageRoute = `${base}/api/users/set_image`;
