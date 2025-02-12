import UserModel from "../model/userModel.js";
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";

export const registerUser=async(req,res)=>{
    const {username,password,firstname,lastname}=req.body;
    const salt=await bcrypt.genSalt(10);
    const hashedPass=await bcrypt.hash(password,salt);
    const newUser=new UserModel({username,password:hashedPass,firstname,lastname})
    

    try{
        const oldUser=await UserModel.findOne({username});
        if(oldUser){
            //console.log(oldUser)
            return res.status(400).json({message:"username already registered!"})
        }
        const user=   await newUser.save()
        const token=jwt.sign({
             username:user.username,id:user._id
        },process.env.JWT_KEY,{expiresIn:'1h'})
        //console.log(token)
        res.status(200).json({user,token})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const login=async (req,res)=>{
    const {username,password}=req.body;

    try{
        const user=await UserModel.findOne({username:username})
        if(user){
            const validity= await bcrypt.compare(password,user.password)
            if(!validity){
                    res.status(400).json("Wrong Password")
            }
            else{
                const token=jwt.sign({
                    username:user.username,id:user._id
                },process.env.JWT_KEY,{expiresIn:'1h'})
                res.status(200).json({user,token});
            }
           
        }
        else{ 
            res.status(404).json("User does not found");
        }
    }
    catch(error){
        console.log(error)
    }
}