const express = require('express');
const bcryptjs = require('bcryptjs');

const productModel = require('../models/products.schema');

const productsRouter = express.Router();
const userModel = require('../models/users.schema');
productsRouter.post(('/addItem'), async (req, res) => {
    try {
        if (req.body.odometer < 0) {
            res.status(400).json({
                success: false,
                message: "Odometer must be greater or equal to 0",
            });
        } else if (req.body.price < 0) {
            res.status(400).json({
                success: false,
                message: "Price must be greater or equal to 0",
            });
        }
        let newProduct = new productModel({
            name: req.body.name,
            odometer: req.body.odometer,
            address: req.body.address,
            imageUrl: req.body.imageUrl,
            color: req.body.color,
            status: 0,
            price: req.body.price,
            soLanThue: 0,
            dealerComments: req.body.dealerComments,
            stars: 0,
            seats: req.body.seats,
            type: req.body.type,
        })

        await newProduct.save()
        res.status(201).json({
            success: true,
            data: newProduct,
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})


productsRouter.post(('/updateItem'), async (req, res) => {
    try {
        if (req.body.odometer < 0) {
            res.status(400).json({
                success: false,
                message: "Odometer must be greater or equal to 0",
            });
        } else if (req.body.price < 0) {
            res.status(400).json({
                success: false,
                message: "Price must be greater or equal to 0",
            });
        }
        productModel.findById(req.body.currentID, function (err, product) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: err.message,
                }
                );
            }
            else if (product.status == 1) {
                res.status(400).json({
                    success: false,
                    message: "Xe dang cho thue ",
                });
            }
            else {
                productModel.findByIdAndUpdate(req.body.currentID,
                    { "name": req.body.name ,
                     "odometer": req.body.odometer ,
                     "address": req.body.address ,
                     "imageUrl": req.body.imageUrl ,
                    "color": req.body.color,
                    "status": 0,
                    "price": req.body.price,
                    "soLanThue": 0,
                    "dealerComments": req.body.dealerComments,
                    "stars": 0,
                    "seats": req.body.seats,
                    "type": req.body.type},
                    function (err2, result) {

                        if (err2) {
                            res.status(500).json({
                                success: false,
                                message: err2.message
                            });
                        }
                        else {
                            res.status(200).json({
                                success: true,
                            });
                        }

                    })
            }
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})







productsRouter.get('/getItems', async (req, res) => {
    try {
        console.log('test1');
        // offset paging => pageNumber | pageSize => limit | skip
        const pageNumber = Number(req.query.pageNumber);
        const pageSize = Number(req.query.pageSize);
        {
            console.log('test 2');
            // get data
            const result = await productModel.find({})
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .lean();
            console.log('result ne', result);
            const total = await productModel.find({}).countDocuments();
            console.log('total', total);
            res.status(200).json({
                success: true,
                data: {
                    data: result,
                    total: total,
                },
            });
            console.log('test 3');
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


productsRouter.get('/getItemsByType', async (req, res) => {
    try {
        console.log('test1');
        // offset paging => pageNumber | pageSize => limit | skip
        const pageNumber = Number(req.query.pageNumber);
        const pageSize = Number(req.query.pageSize);
        {
            console.log('test 2');
            // get data
            const result = await productModel.find({type:req.query.type})
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .lean();
            console.log('result ne', result);
            const total = await productModel.find({type:req.query.type}).countDocuments();
            console.log('total', total);
            res.status(200).json({
                success: true,
                data: {
                    data: result,
                    total: total,
                },
            });
            console.log('test 3');
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


productsRouter.get('/getItemsByName', async (req, res) => {
    try {
        console.log('test1');
        // offset paging => pageNumber | pageSize => limit | skip
        const pageNumber = Number(req.query.pageNumber);
        const pageSize = Number(req.query.pageSize);
        {
            console.log('test 2');
            // get data
            const result = await productModel.find({name: { $regex: '.*' + req.query.name + '.*' }})
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .lean();
            console.log('result ne', result);
            const total = await productModel.find({name: { $regex: '.*' + req.query.name + '.*' }}).countDocuments();
            console.log('total', total);
            res.status(200).json({
                success: true,
                data: {
                    data: result,
                    total: total,
                },
            });
            console.log('test 3');
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


productsRouter.get('/getItemsByOdometer', async (req, res) => {
    try {
        console.log('test1');
        const pageNumber = Number(req.query.pageNumber);
        const pageSize = Number(req.query.pageSize);
        {
            console.log('test 2');
            // get data
            if(req.query.odometer==1){
                const result = await productModel.find({odometer:{$lte:5000}})
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .lean();
            console.log('result ne', result);
            const total = await productModel.find({odometer:{$lte:5000}}).countDocuments();
            console.log('total', total);
            res.status(200).json({
                success: true,
                data: {
                    data: result,
                    total: total,
                },
            });
            console.log('test 3000');
            } else if (req.query.odometer==2) {
                const result = await productModel.find({odometer:{$gte:5000,$lte:10000}})
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .lean();
            console.log('result ne', result);
            const total = await productModel.find({odometer:{$gte:5000,$lte:10000}}).countDocuments();
            console.log('total', total);
            res.status(200).json({
                success: true,
                data: {
                    data: result,
                    total: total,
                },
            });
            console.log('test 3000');
            }
            else if(req.query.odometer==3) {
                const result = await productModel.find({odometer:{$gte:10000}})
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .lean();
            console.log('result ne', result);
            const total = await productModel.find({odometer:{$gte:10000}}).countDocuments();
            console.log('total', total);
            res.status(200).json({
                success: true,
                data: {
                    data: result,
                    total: total,
                },
            });
            console.log('test 3000');
            }
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


productsRouter.get('/getItemByID', async (req, res) => {
    try {
        console.log('test10',)
        {
            productModel.findById(req.query.itemId, function (err, product) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: err.message,
                    }
                    );
                }
                else {
                    console.log('user get cart ne', req.query.itemId);
                    res.status(200).json({
                        success: true,
                        data: product,
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


productsRouter.post('/getItemsByName', async (req, res) => {
    try {
        console.log('test10',)
        {
            productModel.find({ name: { $regex: '.*' + req.body.car + '.*' } }, function (err, product) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: error.message,
                    }
                    );
                }
                else {
                    console.log('user get cart ne', product);
                    res.status(200).json({
                        success: true,
                        data: product,
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

module.exports = productsRouter;