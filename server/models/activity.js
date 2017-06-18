/**
 * Created by martin on 17.06.2017.
 */
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var activitySchema = new Schema({
    _id: { type: objectId, auto: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: false },
    date: { type: String, required: false },
    time: { type: String, required: false }
}, {
    versionKey: false
});

var activity = mongoose.model('activities', activitySchema);

/** what does that do?*/
module.exports = activity;
