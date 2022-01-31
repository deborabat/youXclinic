import axios from "axios";
import { storageGetToken } from "../storage";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAuthoriazationHeader = () => {
  const token = storageGetToken();
  return `Bearer ${token}`;
};
