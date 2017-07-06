/**
 * Created by martin on 06.07.2017.
 */
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var participantsSchema = new Schema({
    _id: { type: String, required: true },
    activity: { type: String, required: true }
}, {
    versionKey: false
});

var participant = mongoose.model('participants', participantsSchema);

/** what does that do?*/
module.exports = participant;