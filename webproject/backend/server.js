const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/users.schema');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouters=require('./routes/users.routes');
const usersRouter = require('./routes/users.routes');
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
                app.use('/user',usersRouter);
                console.log("Server listening on port 5000...");
                var newUser = new User({
                    name: 'tanhng'
                })
                newUser.save();
            }
        });
    }
})


