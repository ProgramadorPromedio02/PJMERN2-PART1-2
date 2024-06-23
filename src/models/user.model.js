// user.model.js

import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
    phone: Number,
    mail: String,
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
