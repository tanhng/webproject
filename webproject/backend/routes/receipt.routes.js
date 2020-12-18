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
                            imageUrl: req.body.imageUrl,
                            car_name: req.body.car_name,
                            soNgayThue: req.body.soNgay,
                            dateStart: ngayThue,
                            status: 0,
                            price: price,
                            soNgayThueThem: 0
                        })

                        await newReceipt.save();
                        productModel.findByIdAndUpdate(req.body.productID, { "status": 1,$inc: { soLanThue: 1 }  }, function (err, result) {

                            if (err) {
                                res.status(500).json({
                                    success: false,
                                    message: err.message
                                });
                            }
                            else {
                                res.status(200).json({
                                    success: true,
                                }); 
                            }

                        })
                        console.log("new ");


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

receiptsRouter.get('/getOrders', async (req, res) => {
    try {
        {
            
            console.log('test 2',req.session.currentUser.email);
            // get data
          
            receiptModel.find({ userEmail: req.session.currentUser.email}, function (err, docs) {
                if (err){
                    res.status(500).json({
                        success: false,
                        message: error.message,
                    });
                } else{
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

       
        }
    
    // catch (error) {
    //     res.status(500).json({
    //         success: false,
    //         message: error.message,
    //     })
    // }
  
//         console.log('test1');
//         // offset paging => pageNumber | pageSize => limit | skip
//         const pageNumber = Number(req.query.pageNumber);
//         const pageSize = Number(req.query.pageSize);
//  {
//             console.log('test 2');
//             // get data
//             const result = await productModel.find({})
//                 .skip((pageNumber - 1) * pageSize)
//                 .limit(pageSize)
//                 .lean();
//             console.log('result ne', result);
//             const total = await productModel.find({}).countDocuments();
//             console.log('total', total);
//             res.status(200).json({
//                 success: true,
//                 data: {
//                     data: result,
//                     total: total,
//                 },
//             });
//             console.log('test 3');
//         }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

receiptsRouter.get(('/getInfoOrder'), async (req, res) => {
    try {
            userModel.find({ email: req.session.currentUser.email }, function (err, user) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: error.message,
                    });
                }
                else {
                    productModel.findById(req.query.productID, function (err, product) {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                message: error.message,
                            });
                        }
                        else {
                            res.status(200).json({
                                success: true,
                                user: user,
                                product: product,
                                dateStart: new Date(),
                            });
                        }});
                }
            })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
});

receiptsRouter.get('/getReceiptsByID', async (req, res) => {
    try {
        console.log('test100',)
        {
           receiptModel.findById(req.query.itemId,function(err,receipt){
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: error.message,
                    }
                    );
                }
                else {
                    console.log('user get cart ne 10000',req.query.itemId);
                    res.status(200).json({
                        success: true,
                        data:receipt,
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
});

module.exports = receiptsRouter;