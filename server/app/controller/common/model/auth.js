'use strict';

const mongoose =  require("mongoose");

var authSchema =  mongoose.Schema({
email:{
    type:String,
    default:null
},
password:{
    type:String,
    default:null
},
role_id:{
    type:mongoose.Types.ObjectId,
    default:null,
    ref:"roles"
}
},
{
    timestamps: true
})


module.exports = mongoose.model('auth',authSchema)