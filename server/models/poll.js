const mongoose =require('mongoose');
const User = require('./user')
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    users_voted:[],
    options:[{
        answear:{type:String,
            },
        votes:{
            type: Number,
            default: 0
        }   
        }],
        created_by:{
            type:Schema.Types.ObjectId, ref:'User'
        }
});

module.exports = mongoose.model('Poll', pollSchema)