"use strict";

const env = process.env.NODE_ENV; // 'dev' or 'test'

const config = {

local:{
    port:3000,
    apiUrl:"http://localhost:3000/",
    db:{
        username:"",
        password:"",
        dbName:'HGTAPP',
        dbUrl:'mongodb://127.0.0.1:27017/'
    }
},
staging:{
    port:3002,
    apiUrl:"http://localhost:3002/",
    db:{
        username:"",
        password:"",
        dbName:'shopDB',
        dbUrl:'mongodb://127.0.0.1:27017/'
    }
},
prod:{
    port:4001,
    apiUrl:"http://localhost:4001/",
    db:{
        username:"",
        password:"",
        dbName:'shopDB',
        dbUrl:'mongodb://127.0.0.1:27017/'
    }
}
}



module.exports = config[env];