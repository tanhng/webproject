const express = require('express');
const mongoose = require('mongoose');
const app = express();

const session = require('express-session');

const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require("./config/config");
const FacebookStrategy = require('passport-facebook').Strategy;

const usersRouter = require('./routes/users.routes');
const productsRouter=require('./routes/products.routes');
const authFbRouter = require('./routes/auth-fb.routes');

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

                passport.use(new FacebookStrategy({
                    clientID: keys.FACEBOOK.clientID,
                    clientSecret: keys.FACEBOOK.clientSecret,
                    callbackURL: "/auth-fb/facebook/callback",
                },
                    function (accessToken, refreshToken, profile, done) {
                        console.log(profile);
                        done(null, profile);
                    }
                ));

                // Passport session setup. 
                passport.serializeUser(function (user, done) {
                    return done(null, user);
                });

                passport.deserializeUser(function (obj, done) {
                    // console.log("inside deserializeUser()", user);
                    return done(null, obj);
                });

                app.use(bodyParser.json())
                
    
                app.use(session({
                    secret: 'keyboard cat',
                    resave: true,
                    saveUninitialized: false,
                    // cookie: { secure: true }
                }));

                app.use(passport.initialize())
                app.use(passport.session())

                app.use('/auth-fb', authFbRouter);
                app.use('/user',usersRouter);
                app.use('/products',productsRouter);
                console.log("Server listening on port 5000...");
                // var newUser = new User({
                //     name: 'tanhng'
                // })
                // newUser.save();
            }
        });
    }
})


