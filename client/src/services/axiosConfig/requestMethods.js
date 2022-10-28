import axiosApi from "./index";
import axios from "axios";

export const publicRequest = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateRequest = axiosApi.create();
