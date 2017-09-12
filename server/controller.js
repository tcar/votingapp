// Our new dependencies
const jwt =require('jsonwebtoken');
const moment =require( 'moment');
const  mongoose = require('mongoose')
const  User =require( './models/user');
const  Poll =require('./models/poll')
// The config file contains the secret to sign the token



module.exports = {
    login :async (req,res,next)=>{ 
        
        req.session.save()
    res.redirect('/login/' + req.user.facebook.token)
    
    },
    }