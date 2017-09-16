const  mongoose =require('mongoose');
const Poll =require( './poll')
var bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  
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