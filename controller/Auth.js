import User from "../model/User.js";

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const doc = await user.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser=async(req,res)=>{
  try {
    const {email,password}=req.body
    const emailExist=await User.findOne({email,password})
    if(emailExist){
      res.status(201).json("Login SuccsessFuly")
    }else{
      res.status(401).json("email and password Not found")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
