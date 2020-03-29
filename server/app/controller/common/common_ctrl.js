'use strict';
//commons
const commonQueries =  require("../../../lib/commonquery");

const constant =  require("../../../lib/constants");

const validators =  require("../../../lib/validators");



const Response =  require("../../../lib/response");

// models
const admins =  require("../admin/model/admin");
const roles  = require("../admin/model/roles");
const auths =  require("./model/auth");


module.exports = {

    register:register,
    login:login

}

function register(req,res){

    console.log(req.body)
    async function register(){


        try{

            if(req.body&&req.body.email){
             
                let validateEmail =  await validators.emailValidate(req.body.email);
                  if(validateEmail){
                    let condition = {name:req.body.role};
                    let roleID = await commonQueries.findOneData(roles,condition);
                
                    if(roleID){
                        let registernew =  new auths({
                            email:req.body.email,
                            password:req.body.password,
                            role_id:roleID[0]._id
                        })

                        let register =  await commonQueries.insertIntoCollection(auths,registernew);
                        if(register){
                            register.password = undefined,
                            
                            res.json(Response(constant.code.SUCCESSCODE,constant.messages.SUCCESS,register))
                        }
                        else{
                            res.json(Response(constant.code.BADREQUEST,constant.messages.FAILED_PROCESS,null))
                        }

                    }
                    else{
                        res.json(Response(constant.code.DATANOTFOUND,constant.messages.REQUIRED_FIELD_MISSING,null))
                    }
                     
                  }
                  else{
                     res.json(Response(constant.code.BADREQUEST,constant.messages.INVALID_EMAIL,null))
                  }
                    




            }


        }
        catch(error){

        }



    }
    register().then(function(){})


}
function login(req,res){
    async function login(){

    }
    login().then(function(){})
}

