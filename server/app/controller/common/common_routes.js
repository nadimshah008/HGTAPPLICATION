'use strict';
const commonController = require('./common_ctrl');

module.exports = function (router) {

    router
    // .get('/users',  UserController.GetUsers)
    // .get('/users/user_id',  UserController.GetUser)
    // .patch('/users/user_id',  UserController.GetUsers)
    // .delete('/users/user_id',  UserController.ToggleDelete);
    .post('/register',commonController.register)
    .post('./login',commonController.login)


    return router;
}

