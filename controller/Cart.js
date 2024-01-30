import Cart from "../model/Cart.js";

export const addToCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    const doc = await cart.save();
    const result = await doc.populate("product");
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const fetchCartByUser = async (req, res) => {
  try {
    const { user } = req.query;
    const cartItems = await Cart.find({ user: user }).populate("product");

    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const deleteFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Cart.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const result = await cart.populate('product');
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};
