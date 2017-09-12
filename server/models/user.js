const  mongoose =require('mongoose');
const Poll =require( './poll')
var bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        select: false
        
    },
    facebook:{
      name: {
        type: String,  
    },
    token:String,
    id:String
    },
    
  polls:[{
    type:Schema.Types.ObjectId, ref:'Poll'
  }]

})





module.exports =  mongoose.model('User', userSchema);