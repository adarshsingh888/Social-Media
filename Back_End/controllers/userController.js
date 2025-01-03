import UserModel from "../model/userModel.js";
import  bcrypt  from "bcrypt";

export const getUser=async(req,res)=>{
    const id=req.params.id;

    try{
        const user=await UserModel.findById(id);
    if(user){
        //it hide the password 
        const {password, ...otherDetails}=user._doc;
        res.status(200).json(otherDetails);
    }
    else{
        res.status(404).json("user did not found");
    }
    }
    catch(error){
        res.status(500).json(error)
    }
};

export const updateUser = async (req, res) => {
    const id = req.params.id;
    console.log("Usser",id)
     console.log("Data Received", req.body)
    const { currentuserID, currentUserAdmin, password } = req.body;
    
    if (id === currentuserID || currentUserAdmin) {
      try {
        // if we also have to update password then password will be bcrypted again
        if (password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(password, salt);
        }
        // have to change this
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        // const token = jwt.sign(
        //   { username: user.username, id: user._id },
        //   process.env.JWTKEY,
        //   { expiresIn: "1h" }
        // );
        // console.log({user, token})
        res.status(200).json(user);
      } catch (error) {
        console.log("Error agya hy")
        res.status(500).json(error);
      }
     
    } else {
      res
        .status(403)
        .json("Access Denied! You can update only your own Account.");
    }
  };


export const deleteUser = async (req, res) => {
    const id = req.params.id;
  
    const { currentuserID, currentUserAdmin } = req.body;
  
    if (currentuserID == id || currentUserAdmin) {
      try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("User Deleted Successfully!");
      } catch (error) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("Access Denied!");
    }
  };


export const followUser = async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
    console.log(id, _id)
    if (_id == id) {
      res.status(403).json("Action Forbidden");
    } else {
      try {
        const followUser = await UserModel.findById(id);
        const followingUser = await UserModel.findById(_id);
  
        if (!followUser.followers.includes(_id)) {
          await followUser.updateOne({ $push: { followers: _id } });
          await followingUser.updateOne({ $push: { following: id } });
          res.status(200).json("User followed!");
        } else {
          res.status(403).json("you are already following this id");
        }
      } catch (error) {
        console.log(error)
        res.status(500).json(error);
      }
    }
  };  

  export const unfollowUser = async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
  
    if(_id === id)
    {
      res.status(403).json("Action Forbidden")
    }
    else{
      try {
        const unFollowUser = await UserModel.findById(id)
        const unFollowingUser = await UserModel.findById(_id)
  
  
        if (unFollowUser.followers.includes(_id))
        {
          await unFollowUser.updateOne({$pull : {followers: _id}})
          await unFollowingUser.updateOne({$pull : {following: id}})
          res.status(200).json("Unfollowed Successfully!")
        }
        else{
          res.status(403).json("You are not following this User")
        }
      } catch (error) {
        res.status(500).json(error)
      }
    }
  };
  
