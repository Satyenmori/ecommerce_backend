import Category from "../model/Category.js";


export const fetchCategory = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const doc = await category.save();
    res.status(200).json(doc)
  } catch (error) {
    res.status(500).json(error)

  }
};
