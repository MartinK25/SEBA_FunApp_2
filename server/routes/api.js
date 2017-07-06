/**
 * Created by martin on 15.06.2017.
 */
var express = require('express'),
    router = express.Router();

//routes for user api
router.use("/user", require("../controllers/user.api"));
//routes for activity api
router.use("/activity", require("../controllers/activity.api"));
//routes for participants api
router.use("/participants", require("../controllers/participants.api"));


//add here other api routes

module.exports = router;