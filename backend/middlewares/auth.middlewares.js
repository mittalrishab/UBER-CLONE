const userModel=require("../models/user.model.js");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const blacklistTokenModel = require("../models/blacklistToken.model.js");
const captainModel = require("../models/captain.model.js");

module.exports.authUser=async(req,res,next)=>{
    const token=req.cookie.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }
    const isBlackListed = await blacklistTokenModel.findOne({token:token});
    if(isBlackListed){
        res.status(401).json({message:"Unauthorized"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await blacklistTokenModel.findById(decoded._id);
        req.user=user;
        next();
    }catch(error){
        return res.status(401).json({message:"Unauthorized"});
    }
}

module.exports.authCaptain = async (req,res,next)=>{
    const token = res.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(401).json({message:'Unauthorized'});
    }
    const isBlackListed = await blacklistTokenModel.findOne({token:token});
    if(isBlackListed){
        return res.status(401).json({message:'Unauthorized'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const captain = await  captainModel.findById(decoded._id);
        res.captain=captain;
        return next();
    }catch(err){
        res.status(401).json({message:"Unauthorized"});
    }
}