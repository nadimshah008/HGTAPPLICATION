'use strict';
//commons
const commonQueries =  require("../../../lib/commonquery");

const constant =  require("../../../lib/constants");

const Response =  require("../../../lib/response");

// models
const admins =  require("./model/admin");
const roles  = require("./model/roles");


module.exports = {
    addRoles:addRoles,
    getRoles:getRoles
}




function addRoles(req,res){

    async function addRoles(){

        try{

            if(req.body&&req.body.role){

                let role =  new roles({
                    name:req.body.role
                })

                let saveRole =  await commonQueries.insertIntoCollection(roles,role);
                if(saveRole){
                    res.json(Response(constant.code.SUCCESSCODE,constant.messages.ADDED_SUCCESS,saveRole))
                }else{
                    res.json(Response(constant.code.DATANOTFOUND,constant.messages.NO_DATA,null))
                }

            }
            else{
    
            res.json(Response(constant.code.BADREQUEST,constant.messages.REQUIRED_FIELD_MISSING))
            }



        }catch(error){
    
            res.json(Response(constant.code.INTERNALSERVERERROR,constant.messages.SERVER_ERROR))
        }


    }

    addRoles().then(function(){})
}

function getRoles(req,res){
    async function getRoles(){

        try{

            let rolesList =  await commonQueries.findAll(roles);
            if(rolesList){
                res.json(Response(constant.code.SUCCESSCODE,constant.messages.FETCHED_ALL,rolesList))
            }
            else{
                res.json(Response(constant.code.DATANOTFOUND,constant.messages.NO_DATA,null))
            }

        }
        catch(error){
            res.json(Response(constant.code.INTERNALSERVERERROR,constant.messages.SERVER_ERROR))
        }

    }

    getRoles().then(function(){})
}