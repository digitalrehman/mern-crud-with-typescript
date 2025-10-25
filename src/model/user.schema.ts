import mongoose, { Schema } from "mongoose";
import type { IUser } from "../types/user.type.ts";

let userSchema: Schema<IUser> = new Schema({
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
});

let user = mongoose.model<IUser>("crud", userSchema);
export default user;
