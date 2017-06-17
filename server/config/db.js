/**
 * Created by martin on 15.06.2017.
 */
var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/mean_db');

module.exports = connection;