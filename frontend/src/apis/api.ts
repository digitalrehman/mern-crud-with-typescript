import type { IUser } from "@/types/types";
import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}alluser`);
  return response.data;
};

export const addUser = async (user: IUser) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}create`,
    user
  );
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}deleteUser/${id}`
  );
  return response.data;
};

export const updateUser = async (id: string, user: IUser) => {
  const response = await axios.put(
    `${import.meta.env.VITE_BASE_URL}updateUser/${id}`,
    user
  );
  return response.data;
};
