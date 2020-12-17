const express = require('express');
const bcryptjs = require('bcryptjs');

const userModel = require('../models/users.schema');
const receiptModel = require('../models/receipt.schema');
const { session } = require('passport');

const usersRouter = express.Router();

usersRouter.post(('/signup'), (req, res) => {
    console.log('req', req.body);
    res.status(200).json({
        success: true,
        message: "Login Success",
        data: {
            email: req.body.email,
        }
    });
})

usersRouter.post(('/register'), async (req, res) => {
    try {
        //validate email, password, fullname
        //const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/

        if (!emailRegex.test(req.body.email)) {
            res.status(400).json({
                success: false,
                message: "Invalid email address"
            });
            console.log(res)
        } else if (req.body.password.length < 6) {
            res.status(400).json({
                success: false,
                message: "Password  too short"
            });
        } else {
            if (req.body.pass != req.body.repeatPassword) {
                res.status(400).json({
                    success: false,
                    message: "Password doesn't match"
                });
            } else {
                // check email exist
                let data = await userModel.findOne({ email: req.body.email }).lean();
                if (data) {
                    res.status(400).json({
                        success: false,
                        message: "Email has been used"
                    });
                } else {
                    //hash pw
                    const hashPassword = bcryptjs.hashSync(req.body.password, 10);
                    //create user record
                    let newUser = new userModel({
                        name: req.body.name,
                        phonenumber: req.body.phonenumber,
                        email: req.body.email,
                        password: hashPassword
                    })

                    await newUser.save()
                    res.status(201).json({
                        success: true,
                        data: newUser,
                    });

                }
            }

        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

usersRouter.post('/login', async (req, res) => {
    try {
        var data = await userModel.findOne({ email: req.body.email }).lean();
        if (!data) {
            res.status(400).json({
                success: false,
                message: "Email doesn't exist"
            });
        } else if (!bcryptjs.compareSync(req.body.password, data.password)) {
            res.status(400).json({
                success: false,
                message: "Wrong Password"
            });
        } else {
            req.session.currentUser = {
                _id: data._id,
                email: data.email
            }
            console.log(req.session.currentUser);
            res.status(200).json({
                success: true,
                message: "Login Success",
                data: {
                    email: data.email,
                    role: data.role,
                }
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

})

usersRouter.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.json({
                success: false,
                message: err.message
            })
        } else {
            res.json({ success: true });
        }
    });
})



usersRouter.get('/getUserByEmail', async (req, res) => {
    try {
        {

            const result = await userModel.find({email: req.query.email}).lean();
            console.log('result get user by email', result);
            res.status(200).json({
                success: true,
                data: {
                    data: result,
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


usersRouter.post(('/editprofile'), async (req, res) => {
    try {
 
        // offset paging => pageNumber | pageSize => limit | skip
        {

            // get data
            const result = await userModel.find({ email: req.body.email }).lean();
            console.log('result',req.body);
                if(!req.body.password){
                    userModel.findOneAndUpdate({email:req.body.email},
                        { "name": req.body.name ,
                         "phonenumber": req.body.phonenumber ,
                    },
                        function (err2, result2) {
    
                            if (err2) {
                                res.status(500).json({
                                    success: false,
                                    message: err2.message
                                });
                            }
                            else {
                                console.log('suscces',result2);
                                res.status(200).json({
                                    success: true,
                                });
                            }
    
                        })
                } else {
                    if (req.body.password.length < 6) {
                        res.status(400).json({
                            success: false,
                            message: "Password  too short"
                        });
                    } else {
                        if (req.body.password != req.body.repeatPassword) {
                            res.status(400).json({
                                success: false,
                                message: "Password doesn't match"
                            });
                        } else {{
                                const hashPassword = bcryptjs.hashSync(req.body.password, 10);
                                userModel.findOneAndUpdate({email:req.body.email},
                                    { "name": req.body.name ,
                                     "phonenumber": req.body.phonenumber ,
                                     "password": hashPassword,
                                },{
                                    new: true
                                  },
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
                        }
            
                    }




                }
                


        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


})


usersRouter.post(('/orderHistory'), async (req, res) => {
    try {
 
        // offset paging => pageNumber | pageSize => limit | skip
        const pageNumber = Number(req.query.pageNumber);
        const pageSize = Number(req.query.pageSize);
        {

            // get data
            const result = await receiptModel.find({ userEmail: req.body.email })
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .lean();
            const total = await receiptModel.find({ userEmail: req.body.email }).countDocuments();

            res.status(200).json({
                success: true,
                data: {
                    data: result,
                    total: total,
                },
            });

        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


})

module.exports = usersRouter;