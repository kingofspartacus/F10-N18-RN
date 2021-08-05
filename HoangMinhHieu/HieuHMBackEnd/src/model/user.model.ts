import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends mongoose.Document {
    phone_number: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
  }

const UserSchema = new mongoose.Schema(
    {
      phone_number: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    },
    { timestamps: true }
);

const User = mongoose.model<UserDocument>("User", UserSchema);