var connection = require("./connection.js");

//Functions to call from the database
var orm = {
    //Selects all
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";

        console.log(queryString);
        console.log("selectAll error");

        connection.query(queryString, function (err, result) {
            if (err) throw err;

            console.log(result);
            callback(result);
        });
    },
    //Inserts one
    insertOne: function (columnInput, value, callback) {
        var queryString = "INSERT INTO burgers (??) VALUES (?)";

        console.log(queryString);

        connection.query(queryString, [columnInput, value], function (err, result) {
            if (err) throw err;

            console.log(result);
            callback(result);
        });
    },
    //Update one
    updateOne: function (columnInput, value, id, callback) {
        var queryString = "UPDATE burgers SET ?? =? WHERE ID =?";

        console.log(queryString);

        connection.query(queryString, [columnInput, value, id], function (err, result) {
            if (err) throw err;

            console.log(result);
            callback(result);
        });
    }
};

module.exports = orm;
