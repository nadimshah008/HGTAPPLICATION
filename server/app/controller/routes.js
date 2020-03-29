'use strict';
module.exports = function (express) {
    const router = require("express").Router();

    
    // user
    require('./admin/admin_routes')(router);
    //admin
    require('./user/user_routes')(router);
    require('./seller/seller_routes')(router);
    require('./common/common_routes')(router);

    return router;
}