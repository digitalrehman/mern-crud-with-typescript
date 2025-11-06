import { type Request, type Response } from "express";
import user from "../model/user.schema.ts";
import type { IUser } from "../types/user.type.ts";

let createUser = async (req: Request, res: Response) => {
  try {
    let { name, email, password }: IUser = req.body;
    if (!name || !email || !password) {
      return res.status(404).json({
        message: "required field are missing",
        status: false,
      });
    }
    let findUser = await user.findOne({ email });
    if (findUser) {
      return res.status(200).json({
        message: `${findUser.name} already exist `,
        status: false,
      });
    }

    let newUser = await user.create({ name, email, password });
    res.status(201).json({
      message: "user create successfully",
      status: true,
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "sever error",
      status: false,
      error,
    });
  }
};

let getAllUser = async (req: Request, res: Response) => {
  try {
    let all_user = await user.find();
    res.status(201).json({
      message: "user find successfully",
      status: true,
      user: all_user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "sever error",
      status: false,
      error,
    });
  }
};

let getById = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    let getUser = await user.findById(id);
    if (!getUser) {
      return res.status(404).json({
        message: "user not found",
        status: false,
      });
    }
    res.status(201).json({
      message: "user found successfully",
      status: true,
      user: getUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "sever error",
      status: false,
      error,
    });
  }
};

let updateUser = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    let { name, email, password }: IUser = req.body;
    if (!name || !email || !password) {
      return res.status(404).json({
        message: "required field are missing",
        status: false,
      });
    }

    let getUser = await user.findById(id);
    if (!getUser) {
      return res.status(404).json({
        message: "user not found",
        status: false,
      });
    }
    let updatedUser = await user.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: `${getUser.name} updated successfully`,
      status: true,
      updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "sever error",
      status: false,
      error,
    });
  }
};

let deleteUser = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    let getUser = await user.findById(id);
    if (!getUser) {
      return res.status(404).json({
        message: "user not found",
        status: false,
      });
    }
    let deletedUser = await user.findByIdAndDelete(id);
    res.status(200).json({
      message: `${getUser.name} delete successfully`,
      status: true,
      deletedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "sever error",
      status: false,
      error,
    });
  }
};

export { createUser, getAllUser, getById, updateUser, deleteUser };
