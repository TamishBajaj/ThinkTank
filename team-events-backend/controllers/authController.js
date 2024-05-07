const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../utils/constants');


exports.register=async(req,res)=>{
    try{
        const {email,password,role}=req.body;

        //check if the user already exists

        let user=await User.findOne({email})
        if(user){
            return res.status(400).json({msg:"User Already Exists"})
        }

        //hash password
        const hashedPassword=await bcrypt.hash(password,10)

        //create new user

        user=new User({
            email,
            password:hashedPassword,
            role
        });
        await user.save()

        res.status(201).json({msg:'User registered Sucessfully'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:'Server Error'})
    }
}

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body

        //check if the user exists
        const user=await User.findOne( {email} )

        if(!user){
            return res.status(401).json({msg:'Invalid Credentials'})
        }

        //validate Password

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            res.status(401).json({msg:'Invalid Credentials'})
        }

        //Generate JWT token

        const token=jwt.sign({userId:user._id,role:user.role},secretKey,{
            expiresIn:'1h'
        })

        res.json({token})

    }catch(err){
        console.log(err)
        res.status(500).json({msg:'Server Error'})
    }
}