import express from "express";
import { connDB } from "./utility/dbconnection.js";
import { productRouter } from "./routes/product.js";
import { brandRouter } from "./routes/Brand.js";
import { categoryRouter } from "./routes/Categoy.js";
import cors from "cors";
import { authRouter } from "./routes/Auth.js";
import { userRouter } from "./routes/User.js";
import { cartRouter } from "./routes/Cart.js";
import { orderRouter } from "./routes/Order.js";

const app = express();

app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());
app.use("/products", productRouter);
app.use("/brands", brandRouter);
app.use("/categories", categoryRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/cart", cartRouter);
app.use("/orders",orderRouter)

connDB().then(() => {
  app.listen(8080, () => {
    console.log("http://localhost:8080");
  });
});
