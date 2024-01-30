import express from "express";

import { fetchUserByID, updateUser } from "../controller/User.js";
export const userRouter = express.Router();

userRouter.get("/:id", fetchUserByID).patch("/:id",updateUser)
