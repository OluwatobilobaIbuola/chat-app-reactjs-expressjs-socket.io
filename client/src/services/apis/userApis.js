import {
  allUsersRoute,
  receiveMessageRoute,
  sendMessageRoute,
  setImageRoute,
} from "../api_constant";
import { privateRequest, publicRequest } from "../axiosConfig/requestMethods";

export const sendMessage = async (payload) => {
  const response = await publicRequest.post(sendMessageRoute, payload);
  return response;
};

export const getMessages = async (payload) => {
  const { from, to } = payload;
  const response = await publicRequest.get(
    `${receiveMessageRoute}/${from}/${to}`
  );
  return response;
};

export const setImage = async ({ id, image }) => {
  const response = await publicRequest.post(`${setImageRoute}/${id}`, image);
  return response;
};

export const getAllUsers = async (id) => {
  const response = await privateRequest.get(`${allUsersRoute}/${id}`);
  return response;
};
