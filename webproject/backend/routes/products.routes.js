const express = require('express');
const bcryptjs = require('bcryptjs');

const productModel=require('../models/products.schema');

const productsRouter = express.Router();

productsRouter.post(('/addItem'), async (req, res) => {
    try {
        if(req.body.odometer<0){
            res.status(400).json({
                success: false,
                message: "Odometer must be greater or equal to 0",
            });
        } else if (req.body.price<0){
            res.status(400).json({
                success: false,
                message: "Price must be greater or equal to 0",
            });
        } 
        let newProduct = new productModel({
            name: req.body.name,
            odometer: req.body.odometer,
            address: req.body.address,
            color: req.body.color,
            status: 0,
            price:req.body.price,
            soLanThue:0,
            dealerComments: req.body.dealerComments,
            stars: 0,
            seats:req.body.seats,
            type:req.body.type,
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







productsRouter.get('/getItems', async (req, res) => {
    try {

         {
            console.log('test 2');
            // get data
            const result = await productModel.find({})
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
        })
    }
});



productsRouter.get('/viewDetail', async (req, res) => {
    try {

         {
            console.log('test 2');
            // get data
            const result = await productModel.find({})
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
        })
    }
});



module.exports =productsRouter;