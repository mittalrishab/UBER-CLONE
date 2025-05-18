const userModel=require("../models/user.model.js");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

module.exports.authUser=async(req,res,next)=>{
    const token=req.cookie.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }
    const isBlackListed = await userModel.findOne({token:token});
    if(isBlackListed){
        res.status(401).json({message:"Unauthorized"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user=user;
        next();
    }catch(error){
        return res.status(401).json({message:"Unauthorized"});
    }
}