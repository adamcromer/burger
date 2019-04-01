var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        var handlebarsObject = {
            burgers: data
        };

        res.render("index", handlebarsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burgers.insertOne(["burgerName"], [req.body.name], function (result) {

        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log(req.body);
    burgers.updateOne(["devoured"], [req.body.devour], [req.params.id], function (result) {
        if (result.changedRows === 0) {

            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
