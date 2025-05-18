const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const authMiddleware=require("../middlewares/auth.middlewares.js");
const captainController = require("../controllers/captain.controller.js");

router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First Name must be at least 3 characters long"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 characters long"),
    body('vehicle.color').isLength({min:3}).withMessage("Color must be atleast 3 characters long"),
    body('vehicle.plate').isLength({min:3}).withMessage("Plate must be atleast 3 characters long"),
    body('vehicle.capacity').isInt({min:1}).withMessage("Capacity must be atleast 1"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Invalid vehicleType"),
],captainController.registerCaptain);

router.post('/login',[
    body.apply('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password must be atleast of 6 length")
],captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);

router.get('/logout',authMiddleware.authCaptain,captainController.loginCaptain);

module.exports=router;