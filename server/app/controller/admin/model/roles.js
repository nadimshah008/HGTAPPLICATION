'use strict';

const mongoose =  require("mongoose");

var rolesSchema =  mongoose.Schema({
name:{
    type:String,
    default:null
}
},
{
    timestamps: true
})


module.exports = mongoose.model('roles',rolesSchema)