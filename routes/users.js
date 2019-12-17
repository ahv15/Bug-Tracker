const express = require('express');
const users= express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user.model');
users.use(cors());
process.env.SECRET_KEY='secret';
users.route('/register').post((req,res) => {
    const userInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }
    user.findOne({
        email: req.body.email
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10,(err,hash) => {
                userInfo.password=hash
                user.create(userInfo)
                .then(user => {
                    res.json({status: user.email + 'registered!'})
                })
                .catch(err => {
                    res.send('error:' + err)
                })
            })
        } else{
            res.json({error: 'User exists'})
        }
    })
    .catch(err => {
        res.send('error:' + err)
    })

})

module.exports = user;