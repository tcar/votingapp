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
    res.redirect('/')
    
    },

getPolls: async(req,res,next)=>{

    const polls = await Poll.find({}).populate('created_by')
    res.send(polls)
},
myPolls : async(req,res,next)=>{
const user = await User.find({_id:req.user._id}).populate('polls')
    
res.send(user[0].polls)
},
postPoll: async(req,res,next)=>{

    const poll = new Poll(req.body)
    poll.created_by = req.user._id
    const user = await User.findOne({_id:req.user._id})
   
    user.polls.push(poll)
    user.save()
    poll.save()
    const polls = await Poll.find({}).populate('created_by')
    res.send(polls)

},
deletePoll: async(req,res,next)=>{
    const poll = await Poll.remove({_id:req.body.id})
    res.send('deleted')
},
vote: async (req,res,next)=>{
    const poll = await Poll.findOne({_id:req.body.id})
    poll.users_voted.push(req.user._id)
    poll.save()
    const vote = await Poll.findOneAndUpdate({'options._id':req.body.vote},
    {$inc:{'options.$.votes': 1}},
   {new: true})
   const polls = await Poll.find({}).populate('created_by')
   res.send(polls)
},


getPoll:async (req,res,next)=>{
    const poll = await Poll.find({_id:req.body.id})
    res.send(poll)
},
getUser:async(req,res,next)=>{
    if(req.user){
        const user= await User.find({_id:req.user._id}).populate('polls')
        res.send(user)
    }else{
        res.send({logedin:false})
    }
 
},
logout:async(req,res,nexr)=>{
    req.logout();
    res.redirect('/');
},

getVotes: async (req,res,next)=>{

    const poll = await Poll.findOne({_id:req.body.id})
    res.send(poll)
},

//testing

getUsers:async(req,res,nexr)=>{
    const users= await User.find({})
    res.send(users)
},

delete:async(req,res,nexr)=>{
    const polls= await Poll.remove({})
    res.send(polls)
},
deleteusers:async(req,res,nexr)=>{
    const users= await User.remove({})
    res.send(users)
}



    }