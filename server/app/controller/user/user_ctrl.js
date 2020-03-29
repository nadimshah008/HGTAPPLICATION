'use strict';
//commons
const commonQueries =  require("../../../lib/commonquery");

const constant = require("../../../lib/constants");

const Response =  require("../../../lib/response");


// models
const users =  require("./model/user")


module.exports = {
    getUser:getUser,
    addUser:addUser
}

function getUser(req,res){
     async function getUser(){
        try{
        let userList  =  await commonQueries.findAll(users);

        res.json(Response(constant.code.SUCCESSCODE,constant.messages.FETCHED_ALL,userList));      
        }
        catch(error){
            res.json(Response(constant.code.INTERNALSERVERERROR,constant.messages.FAILED_PROCESS,null))
        }
    }
    getUser().then(function(){})
}


function addUser(req,res){
    async function addUser(){
       try{
           if(req.body&&req.body.name){

            let saveUser  = new users({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone
            });

            let saveUserData =  await commonQueries.insertIntoCollection(users,saveUser);

            console.log(saveUserData);
                      res.json(Response(constant.code.SUCCESSCODE,constant.messages.FETCHED_ALL,saveUserData))
           }
       }
       catch(error){
           console.log(error);
           res.json({"code":constant.code.INTERNALSERVERERROR,"message":constant.messages.FAILED_PROCESS})
       }
   }
   addUser().then(function(){})
}

