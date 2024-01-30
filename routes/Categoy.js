import express from "express";
import { createCategory, fetchCategory } from "../controller/Category.js";

export const categoryRouter = express.Router()

categoryRouter.get("/", fetchCategory).post("/", createCategory);


