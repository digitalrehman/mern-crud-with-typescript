import type { IUser } from "../types/types";
import axios from "axios";

export let getUsers = async () => {
  let response = await axios.get(`${import.meta.env.VITE_BASE_URL}users`);
  return response.data;
};

export let addUser = async (user: IUser) => {
  let response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}create`,
    user
  );
  return response.data;
};

export let deleteUser = async (id: string) => {
  let response = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}deleteUser/${id}`
  );
  return response.data;
};

export let updateUser = async (id: string, user: IUser) => {
  let response = await axios.put(
    `${import.meta.env.VITE_BASE_URL}updateUser/${id}`,
    user
  );
  return response.data;
};