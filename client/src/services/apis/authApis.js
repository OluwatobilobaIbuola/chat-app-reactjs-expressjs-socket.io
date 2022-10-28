import { loginRoute, logoutRoute, registerRoute } from "../api_constant";
import { publicRequest } from "../axiosConfig/requestMethods";
export const login = (payload) => {
  const response = publicRequest.post(`${loginRoute}`, payload);
  return response;
};

export const register = (payload) => {
  const response = publicRequest.post(`${registerRoute}`, payload);
  return response;
};

export const logout = (id) => {
  const response = publicRequest.post(`${logoutRoute}/${id}`);
  return response;
};
