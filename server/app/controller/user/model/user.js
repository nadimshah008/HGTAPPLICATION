'use strict';

const mongoose =  require("mongoose");

var userSchema =  mongoose.Schema({
name:{
    type:String,
    default:null
},
email:{
    type:String,
    default:null,
    unique:true
},
phone:{
    type:String,
    default:null
},
address:{
    type:String,
    default:null
},
long:{
    type:String,
    default:null
},
lat:{
    type:String,
    default:null
},
countrycode:{
    type:String,
    default:null
},
deviceToken:{
    type:String,
    default:null
},
profile_pic:{
    type:String,
    default:null
}
},
{
    timestamps: true
})


module.exports = mongoose.model('users',userSchema)