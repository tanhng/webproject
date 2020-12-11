const express = require('express');
const bcryptjs = require('bcryptjs');
const productModel = require('../models/products.schema');
const userModel = require('../models/users.schema');
const receiptModel = require('../models/receipt.schema');
const adminRouter = express.Router();

adminRouter.post(('/getOrders'), (req, res) => {
    console.log('req', req.body);

    receiptModel.find({ userEmail: req.body.email }, function (err, docs) {
        if (err) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        } else {
            console.log('result ne', docs);
            res.status(200).json({
                success: true,
                data: {
                    data: docs,
                    total: docs.length,
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
                    console.log("test finish",result);
                    
                    productModel.findByIdAndUpdate(result.car_id, { "status": 0 }, function (err3, result) {

                        if (err3) {
                            res.status(500).json({
                                success: false,
                                message: err3.message
                            });
                        }
                        else {
                            console.log("test finish2",result);
                            res.status(200).json({
                                success: true,
                            }); 
                        }

                }
                    )
            // })
        




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