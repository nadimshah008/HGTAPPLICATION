'use strict';

const Validators = {};

Validators.emailValidate =  function emailValidate(data) {

  return  new Promise(function(resolve,reject) {
      console.log("data",data)
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;



    if(emailRegexp.test(data) === true){

        resolve(true)
    }
    else if(emailRegexp.test(data) === false){
     
        resolve(false)
    }
    })
    
}



module.exports =  Validators;