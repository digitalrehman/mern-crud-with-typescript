import mongoose, { Schema } from "mongoose";
import type { IUser } from "../types/user.type.ts";

let userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let user = mongoose.model<IUser>("crud", userSchema);
export default user;
