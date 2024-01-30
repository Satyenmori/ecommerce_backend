import express from "express";
import { createProduct, fetchAllproducts, fetchProductById, updateProduct } from "../controller/product.js";

export const productRouter=express.Router();

productRouter
  .post("/", createProduct)
  .get("/", fetchAllproducts)
  .get("/:id",fetchProductById)
  .patch("/:id",updateProduct)

