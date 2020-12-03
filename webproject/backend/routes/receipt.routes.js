const express = require('express');
const bcryptjs = require('bcryptjs');

const receiptModel = require('../models/receipt.schema');
const productModel = require('../models/products.schema');

const userModel= require('../models/users.schema');
const receiptsRouter = express.Router();

receiptsRouter.post(('/addReceipt'), async (req, res) => {
    try {
        console.log("test9", req.body);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

receiptsRouter.post(('/getInfoOrder'), async (req, res) => {
    try {
        {
            userModel.find({email: req.body.email}, function (err, user) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: error.message,
                    }
                    );
                }
                else {
                    console.log('test11',user);
                    productModel.find({email: req.body.email}, function (err, product) {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                message: error.message,
                            }
                            );
                        }
                        else {
                            console.log('test11',user);
                            res.status(200).json({
                                success: true,
                                user: user,
                                product:product,
                                dateStart: new Date(),
                            });
                        }
                    })
                }
            })
            
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
})

module.exports = receiptsRouter;