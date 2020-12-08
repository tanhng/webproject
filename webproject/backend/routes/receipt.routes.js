const express = require('express');
const bcryptjs = require('bcryptjs');

const receiptModel = require('../models/receipt.schema');
const productModel = require('../models/products.schema');

const userModel = require('../models/users.schema');
const receiptsRouter = express.Router();




receiptsRouter.post(('/createReceipt'), async (req, res) => {
    try {
        productModel.findById(req.body.productID, async function (error, product) {
            if (error) {
                res.status(500).json({
                    success: false,
                    message: error.message,
                }
                );
            }
            else {
                if (product.status == 1) {
                    res.status(500).json({
                        success: false,
                        message: "Xe da dat",
                    }
                    );
                }
                else {
                    let today = new Date();
                    let ngayThue = new Date(req.body.dateStart);
                    let temp = parseInt((ngayThue.getTime() - today.getTime()) / (1000 * 3600 * 24));
                    if (temp < 0) {
                        res.status(400).json({
                            success: false,
                            message: 'invalid day',
                        });
                    }
                    else if (temp > 7) {
                        res.status(400).json({
                            success: false,
                            message: 'invalid day > 7 ',
                        });
                    }
                    else {
                        let price = req.body.soNgay * req.body.price;
                        console.log(req.body.email);
                        let newReceipt = new receiptModel({
                            userEmail: req.body.email,
                            car_id: req.body.productID,
                            soNgayThue: req.body.soNgay,
                            dateStart: ngayThue,
                            status: 0,
                            price: price,
                            soNgayThueThem: 0
                        })

                        await newReceipt.save();
                        productModel.findByIdAndUpdate(req.body.productID, { "status": 1 }, function (err, result) {

                            if (err) {
                                res.send(err)
                            }
                            else {
                                res.send(result)
                            }

                        })
                        console.log("new ");
                        res.status(200).json({
                            success: true,
                        });

                    }
                }
            }
        });

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
            userModel.find({ email: req.body.email }, function (err, user) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: error.message,
                    }
                    );
                }
                else {
                    console.log('test12', user);

                    productModel.findById(req.body.productID, function (err, product) {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                message: error.message,
                            }
                            );
                        }
                        else {
                            console.log('test11', product);
                            res.status(200).json({
                                success: true,
                                user: user,
                                product: product,
                                dateStart: new Date(),
                            });
                        }
                    });
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