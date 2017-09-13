// Our new dependencies
const jwt =require('jsonwebtoken');
const moment =require( 'moment');
const  mongoose = require('mongoose')
const  User =require( './models/user');
const  Poll =require('./models/poll')
// The config file contains the secret to sign the token



module.exports = {



    login :async (req,res,next)=>{ 
        console.log(req.user)
    req.session.save()
    res.redirect('/login/' + req.user.facebook.token)
    
    },

getPolls: async(req,res,next)=>{

    const polls = await Poll.find({})
    res.send(polls)
},
myPolls : async(req,res,next)=>{
const user = await User.find({_id:req.user._id}).populate('polls')
    res.send(user.polls)
},
postPoll: async(req,res,next)=>{

    const poll = new Poll(req.body)
    poll.created_by = req.user._id
    const user = await User.find({_id:req.user._id})
    user.polls.push(poll)
    user.save()
    res.send(user)

},
deletePoll: async(req,res,next)=>{
    const poll = await Poll.remove({_id:req.body.id})
    res.send('deleted')
},
vote: async (req,res,next)=>{
    const vote = await Poll.findOneAndUpdate({'options._id':req.body.vote},
    {$inc:{'options.$.votes': 1}},
   {new: true})
res.json(vote)
},


getPoll:async (req,res,next)=>{
    const poll = await Poll.find({_id:req.body.id})
    res.send(poll)
},

//testing

getUsers:async(req,res,nexr)=>{
    const users= await User.find({})
    res.send(users)
}



    }