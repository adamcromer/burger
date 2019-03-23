var orm = require("../config/orm");

var burgers = {
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },
    insertOne: function (columnInput, value, callback) {
        orm.insertOne(columnInput, value, function (res) {
            callback(res);
        });
    },
    updateOne: function (tableInput, columnInput, value, id, callback) {
        orm.updateOne(tableInput, columnInput, value, id, function (res) {
            callback(res);
        });
    }
};

module.exports = burgers;
