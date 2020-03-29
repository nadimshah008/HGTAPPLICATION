'use strict';
const userController = require('./user_ctrl');

module.exports = function (router) {

    router.get('/users',userController.getUser),
    router.post('/user',userController.addUser)

    return router;
}

