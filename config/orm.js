var connection = require("./connection.js");

var orm = {
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;

            console.log(result);
            callback(result);
        });
    },
    insertOne: function (columnInput, value, callback) {
        var queryString = "INSERT INTO burgers (??) VALUES (?)";

        console.log(queryString);

        connection.query(queryString, [columnInput, value], function (err, result) {
            if (err) throw err;

            console.log(result);
            callback(result);
        });
    },
    updateOne: function (columnInput, value, id, callback) {
        var queryString = "UPDATE burgers SET ?? =? WHERE ID =?";

        console.log(queryString);

        connection.query(queryString, [tableInput, columnInput, value, id], function (err, result) {
            if (err) throw err;

            console.log(result);
            callback(result);
        });
    }
};

module.exports = orm;
