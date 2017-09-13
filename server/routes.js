const express = require('express')
const router = express.Router()
const controller = require('./controller')
const passport = require('passport')
const auth = require('./auth/auth')



router.route('/auth/facebook')
.get(passport.authenticate('facebook'))

router.route('/auth/facebook/callback')
.get(passport.authenticate('facebook', {
        failureRedirect : '/'}),    
                controller.login
)




router.route('/getPolls')
    .get(controller.getPolls)

router.route('/myPolls')
    .get(controller.myPolls)

router.route('/postPoll')
    .post(controller.postPoll)

router.route('/deletePoll')
    .delete(controller.deletePoll)

router.route('/vote')
    .put(controller.vote)

router.route('/getPoll')
    .post(controller.getPoll)


//testing

router.route('/users')
    .get(controller.getUsers)

module.exports= router

