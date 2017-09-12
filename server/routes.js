const express = require('express')
const router = express.Router()
const controller = require('./controller')
const passport = require('passport')
const auth = require('./auth/auth')



router.route('/auth/facebook')
.get(passport.authenticate('facebook'))

router.route('/auth/facebook/callback')
.get(passport.authenticate('facebook', {
    successRedirect:'/',
        failureRedirect : '/'}),    
                
)



/*
router.route('/getPolls')
    .get(controller.getPolls)

router.route('/myPolls')
    .get(controller.myPoll)

router.route('/postPoll')
    .post(controller.postPoll)

router.route('/deletePoll')
    .delete(controller.deletePoll)

router.route('/vote')
    .post(controller.vote)

router.route('getVotes')
    .post(controller.getVotes)
*/


module.exports= router

