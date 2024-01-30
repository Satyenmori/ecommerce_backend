import express from "express"
import { addToCart, deleteFromCart, fetchCartByUser, updateCart } from "../controller/Cart.js";

export const cartRouter=express.Router();

cartRouter.post("/",addToCart)
          .get("/",fetchCartByUser)
          .delete("/:id",deleteFromCart)
          .patch("/:id",updateCart)