const express = require('express');
const bcryptjs = require('bcryptjs');
const productModel = require('../models/products.schema');
const userModel = require('../models/users.schema');
const receiptModel = require('../models/receipt.schema');
const adminRouter = express.Router();

adminRouter.get(('/checkMailAdmin'), async (req, res) => {
    try {
        var data = await userModel.findOne({ email: req.session.currentUser.email }).lean();
        if (data.role == 0) {
            res.status(400).json({
                success: false,
                message: "You are not admin"
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Success",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

adminRouter.post(('/getOrders'), (req, res) => {
    console.log('req', req.body);
    let imageUrlArray = new Array();
    imageUrlArray.push("1");
    receiptModel.find({ userEmail: req.body.email }, function (err, docs) {
        if (err) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        } else {

            console.log('result ne', docs);
            docs.map(item => {
                console.log("item id", item.car_id);
                productModel.findById(item.car_id, function (err, product) {
                    if (err) {
                        res.status(500).json({
                            success: false,
                            message: err.message,
                        }
                        );
                    }
                    else {
                        if (product) {
                            console.log("image url", product.imageUrl);
                            imageUrlArray.push(product.imageUrl);
                            imageUrlArray.map(x => {
                                console.log("test imageURL", x);

                            });
                        }
                        else console.log("not found");
                        // product.map(x=>{
                        //     console.log("test imageURL",x.imageUrl);
                        // // })

                    }
                })
            })

            res.status(200).json({
                success: true,
                data: {
                    data: docs,
                    total: docs.length,
                    imageUrlArray: imageUrlArray,
                },
            });
        }
    });


})

adminRouter.post(('/finishPurchase'), (req, res) => {
    try {
        {
            receiptModel.findByIdAndUpdate(req.body.receiptID, { "status": 1 }, function (err, result) {

                if (err) {
                    res.status(500).json({
                        success: false,
                        message: err.message
                    });
                }
                else {

                    productModel.findByIdAndUpdate(result.car_id, { "status": 0 }, function (err3, result) {

                        if (err3) {
                            res.status(500).json({
                                success: false,
                                message: err3.message
                            });
                        }
                        else {
                            console.log("test finish2", result);
                            res.status(200).json({
                                success: true,
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


adminRouter.post(('/giaHanThem'), (req, res) => {
    try {
        {
            productModel.findById(req.body.currentItem.car_id,  function (err3, result) {

                if (err3) {
                    res.status(500).json({
                        success: false,
                        message: err3.message
                    });
                }
                else {
                    let priceAdd =  result.price*req.body.soNgayThem + req.body.currentItem.price;
                    receiptModel.findByIdAndUpdate(req.body.currentItem._id, { "price": priceAdd,$inc: { soNgayThue: req.body.soNgayThem }  }, function (err, result) {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                message: err3.message
                            });
                        }
                        else {
                            console.log("test finish2", result);
                            res.status(200).json({
                                success: true,
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




module.exports = adminRouter;