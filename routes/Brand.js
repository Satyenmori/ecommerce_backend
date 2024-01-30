import express from "express"
import { createBrand, fetchBrands } from "../controller/Brand.js";

export const brandRouter = express.Router();

brandRouter.get("/",fetchBrands).post("/",createBrand)

