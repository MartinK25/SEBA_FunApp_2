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
    address: { type: String, required: true }
}, {
    versionKey: false
});

var user = mongoose.model('activities', activitySchema);

/** what does that do?*/
module.exports = activiy;
