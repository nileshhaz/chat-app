import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res)=>{
    try {
        const {fullName, username,password,confirmPassword,gender} = req.body;
    
        if(password != confirmPassword){
            return res.status(400).json({error:"Password don't match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"User already exists"})
        }

        //Hashing and salting the password

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        const profilePic = `https://api.dicebear.com/9.x/miniavs/svg?seed=${username}`

        const newUser =  new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic
        })
         
        if(newUser){
            
            //Generate JWT token
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }else{
            res.status(400).json({error:"Invalid user data"});
        }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const login = async (req,res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPassworCorrect = await bcryptjs.compare(password, user?.password || "");

        if(!user || !isPassworCorrect){
            return res.status(400).json({error: "Invalid Username Or Password"})
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const logout = async (req,res)=>{
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(500).json({message: "Logged out Successfully"});

    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}