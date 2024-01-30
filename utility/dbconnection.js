import mongoose from "mongoose";
const URI = "mongodb://127.0.0.1:27017/ecommerce";

export const connDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB Connected succsessfuly");
  } catch (error) {
    console.log("DB x connected ");
  }
};
