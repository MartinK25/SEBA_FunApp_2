/**
 * Created by martin on 08.07.2017.
 */
/* currently only for users api used as config*/

var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

Config.db.host = 'localhost:27017';
Config.db.name = 'moviedb';

// Use environment defined port or 3000
Config.app.port = process.env.PORT || 3000;

Config.auth.jwtSecret = "very secret secret";

module.exports = Config;