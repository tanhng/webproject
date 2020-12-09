const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uploadRouter = require('./routes/upload.routes');
const session = require('express-session');

const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const bcryptjs = require('bcryptjs');

const keys = require("./config/config");
const FacebookStrategy = require('passport-facebook').Strategy;
const userModel = require('./models/users.schema');

const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes');
const authFbRouter = require('./routes/auth-fb.routes');

const receiptsRouter=require('./routes/receipt.routes');
mongoose.connect('mongodb://localhost:27017/webproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (e) => {
    if (e) {
        throw e;
    } else {
        app.listen(5000, (err) => {
            if (err)
                throw err;
            else {
                app.use(cors({
                    origin: ['http://localhost:3000'],
                    credentials: true
                }));

                app.use(bodyParser.json())
                app.use(express.static('public'));

                app.use(session({
                    secret: 'keyboard cat',
                    resave: true,
                    saveUninitialized: false,
                    // cookie: { secure: true }
                }));

                // Passport session setup. 
                passport.serializeUser(function (user, done) {
                    return done(null, user);
                });

                passport.deserializeUser(function (user, done) {
                    // console.log("inside deserializeUser()", user);
                    return done(null, user);
                });

                app.use(passport.initialize())
                app.use(passport.session())

                passport.use(new FacebookStrategy({
                    clientID: keys.FACEBOOK.clientID,
                    clientSecret: keys.FACEBOOK.clientSecret,
                    callbackURL: "/auth-fb/facebook/callback",
                    profileFields: keys.FACEBOOK.profileFields,
                },
                    (accessToken, refreshToken, profile, done) => {
                        console.log(profile);
                        userModel.findOne({
                            email:profile.emails[0].value
                        }).then((user)=>{
                            if(user){
                                console.log('user ne',user);
                                done(null,user);
                            }
                            else {
                                new userModel({
                                    email:profile.emails[0].value,
                                    name:profile.displayName,
                                    password: bcryptjs.hashSync(profile.id)
                                }).save().then((newUser)=>{
                                    console.log('new User:',newUser);
                                    done(null,newUser);
                                })
                            }
                        })

                    }
                ));

                
                app.use('/upload',uploadRouter);
                app.use('/auth-fb', authFbRouter);
                app.use('/user',usersRouter);
                app.use('/products',productsRouter);
                app.use('/receipts',receiptsRouter);
                console.log("Server listening on port 5000...");
            }
        });
    }
})


