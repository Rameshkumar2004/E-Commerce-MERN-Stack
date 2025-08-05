import userModel from "../Model/userModel.js"
import { comparepassword, hashpassword } from './../Helpers/authHelper.js';
import JWT from "jsonwebtoken";

  export const registerController = async( req , res)=>{
    try{
        const {name ,email,password,phone,address}=req.body
        //validation
        if(!name){ return res.send({error:"name is required"})}
        if(!email){ return res.send({error:"email is required"})}
        if(!password){ return res.send({error:"password is required"})}
        if(!phone){ return res.send({error:"phone no is required"})}
        if(!address){ return res.send({error:"address is required"})}

        //Check user
        const existinguser=await userModel.findOne({email})
        if(existinguser){
            return res.status(200).send({
                success:true,
                message:"Already Register please login"
            })
        }

        // Register User
        const hashedpassword=await hashpassword(password)
        //save
        const user = await new userModel({name,email,phone,address,password:hashedpassword,}).save()
        res.status(201).send({
            success:true,
            message:"User Register successfully",
            user
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Register",
            error
        })

    }
 }


 // Post Login
 export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    const match = await comparepassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid password",
      });
    }

    const token = JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).send({
      success: true,
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address
        // role: user.role,
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//test controller
export const testController=(req ,res)=>{
    res.send("protect Routes")
}
 