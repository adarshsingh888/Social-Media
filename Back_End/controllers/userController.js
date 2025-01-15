import UserModel from "../model/userModel.js";
import  bcrypt  from "bcrypt";
import  jwt  from "jsonwebtoken";
import PostModel from '../model/postModel.js'
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
    const { _id, currentUserAdmin, password } = req.body;
    console.log(_id)
    if (id === _id || currentUserAdmin) {
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
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );
        console.log({user, token})
        res.status(200).json({user,token});
      } catch (error) {
        console.error("Error during user update:", error);
    
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
    console.log("User ID from params:", id);
  
    const { _id } = req.body; // Make sure req.body exists
    console.log("User ID from body:", _id);
  
    if (_id == id) {
      try {
        console.log("In try block...");
        const userDeleted = await UserModel.findByIdAndDelete(id);
        if (!userDeleted) {
          return res.status(404).json("User not found!");
        }
        console.log("User deleted:", userDeleted);
  
        // Ensure userId matches the type in PostModel
        const postsDeleted = await PostModel.deleteMany({ userId: String(id) });
        console.log(`Deleted ${postsDeleted.deletedCount} posts`);
  
        res.status(200).json("User and associated posts deleted successfully!");
      } catch (error) {
        console.error("Error in deleteUser:", error);
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(403).json("Access Denied!");
    }
  };
  


export const followUser = async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
    
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
    //console.log("Unfollow User",req.body)
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

  export const getAllUser = async (req, res) => {
    try {
      let users = await UserModel.find(); // Fetch all users from the database
  
      // Transform users by removing the password field
      users = users.map((user) => {
        const { password, ...other } = user.toObject(); // Convert Mongoose document to plain object
        return other;
      });
  
      
      res.status(200).json(users); // Send the modified users list as the response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while fetching users" });
    }
  };
  
