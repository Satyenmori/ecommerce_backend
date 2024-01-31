import Brand from "../model/Brand.js";

export const fetchBrands = async (req, res) => {
  try {
    const brands = await Brand.find({}).exec();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createBrand = async (req, res) => {
  try {
    const brand = new Brand(req.body);
    const doc = await brand.save();
    res.status(200).json(doc)
  } catch (error) {
    res.status(500).json(error)

  }
};
