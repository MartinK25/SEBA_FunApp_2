/**
 * Created by martin on 08.07.2017.
 */
module.exports = usersRoutes;
cors = require("cors");


function usersRoutes(passport) {

    var userController = require('./../controllers/users.api');
    var router = require('express').Router();

    router.use(cors())

    router.post('/login', userController.login);
    router.post('/signup', userController.signup);
    router.post('/unregister', passport.authenticate('jwt', {session: false}),userController.unregister)

    return router;

}
