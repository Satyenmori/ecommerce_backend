import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new mongoose.Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
});

const virtual = categorySchema.virtual("id");
virtual.get(function () {
  return this._id;
});
categorySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Category = new mongoose.model("Category", categorySchema);

export default Category;
