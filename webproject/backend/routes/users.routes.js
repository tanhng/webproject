const express = require('express');
const userModel=require('../models/users.schema');

const usersRouter = express.Router();

usersRouter.post(('/signup'),(req,res)=>{
    console.log('req',req.body);
    res.status(200).json({
        success: true,
        message: "Login Success",
        data: {
            email: req.body.email,
        }
    });
})

module.exports =usersRouter;