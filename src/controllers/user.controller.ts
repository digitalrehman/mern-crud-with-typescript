import { type Request, type Response } from "express";
import type { IUser } from "../types/user.type.ts";
import users from "../model/user.schema.ts";
const getUser = (req: Request, res: Response) => {
  res.status(201).json({
    message: "get all user",
    user: users,
  });
};

const getById = (req: Request, res: Response) => {
  const { id } = req.params;
  const findUser = users.find((value) => value.id === id);
  if (!findUser) {
    return res.status(404).json({
      message: "user not found",
      status: false,
    });
  }
  res.status(201).json({
    message: "find user",
    status: true,
    findUser,
  });
};
export { getUser, getById };
