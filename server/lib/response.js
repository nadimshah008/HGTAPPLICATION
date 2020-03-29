'use strict';
const Response = function Response(status,message,data={}){

    return {
        code:status,
        message:message,
        data:data
    }
}
module.exports =  Response;