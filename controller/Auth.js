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
    const user=await User.findOne({email: req.body.email}).exec();
    console.log(user);
    if(!user){
      res.status(401).json({msg:"no found email"})
    }else if(user.password===req.body.password){
      res.status(200).json({id:user.id, email:user.email, name:user.name,addresses:user.addresses});
    }else{
      res.status(401).json({ message: 'invalid credentials' });
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
