import { type Request, type Response } from "express";
import user from "../model/user.schema.ts";

let createUser = async (req: Request, res: Response) => {
  try {
    let { name, email, password } = req.body;
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
    console.log(getUser);

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


export { createUser, getAllUser, getById };
