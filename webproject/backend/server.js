const express = require('express');
const mongoose = require('mongoose');
const app = express();

const session = require('express-session');

const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.routes');
const productsRouter=require('./routes/products.routes');
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
    
                app.use(session({
                    secret: 'keyboard cat',
                    resave: true,
                    saveUninitialized: false,
                    // cookie: { secure: true }
                }));

                app.use('/user',usersRouter);
                app.use('/products',productsRouter);
                app.use('/receipts',receiptsRouter);
                console.log("Server listening on port 5000...");
                // var newUser = new User({
                //     name: 'tanhng'
                // })
                // newUser.save();
            }
        });
    }
})


