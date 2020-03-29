/**
 * Created by siroramirez on 23/05/17.
 */
'use strict'

var mongoose = require('mongoose');
var config = require('../config/config');


var db;

var options = {
    user :config.db.username,
    pass:config.db.password,
    useUnifiedTopology: true ,
    useNewUrlParser: true 
}

exports.DBConnectMongoose = function() {
    return new Promise(function(resolve, reject) {
        if (db) {
            return db;
        }
        mongoose.Promise = global.Promise;

        // database connect
        mongoose.connect(config.db.dbUrl+config.db.dbName,options)
            .then(() => {
                console.log('mongo connection created at '+  config.db.dbUrl);
                resolve(db);
            })
            .catch(err => {
                console.log(err)
                console.log('error creating db connection: ' + err);
                reject(db);
            });
    });
};

exports.getDBConexion = function () {
    if (db) {
        return db;
    }

    console.log('There is no mongo connection');
    return null;
}