/**
 * Created by martin on 17.06.2017.
 */
var express = require("express"),
    router = express.Router(),
    activity = require("../models/activity.js"),
    cors = require("cors");

router.use(cors())

router.get("/", function(req, res) {
    activity.find({}, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function(req, res) {
    var id = req.params.id;
    activity.find({ _id: id }, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
}).post("/", function(req, res) {
    var obj = req.body;
    var model = new activity(obj);
    model.save(function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("created");
    });
}).put("/:id", function(req, res) {
    var id = req.params.id;
    var obj = req.body;

    activity.findByIdAndUpdate(id, { name: obj.name, contactNo: obj.contactNo, address: obj.address },
        function(err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
}).delete("/:id", function(req, res) {
    var id = req.params.id;
    activity.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;