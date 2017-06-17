/**
 * Created by martin on 15.06.2017.
 */
var express = require('express'),
    router = express.Router(),
    path = require("path");

var absPath = path.join(__dirname, "../../app");

// route to handle home page
router.get('/', function(req, res, next) {
    res.sendFile(absPath + "/index.html");
});

module.exports = router;