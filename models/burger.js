var orm = require("../config/orm");

var burgers = {
    selectAll: function (callback) {
        orm.selectAll(res => {
            callback(res);
        });
    },
    insertOne: function (columnInput, value, callback) {
        orm.insertOne(columnInput, value, res => {
            callback(res);
        });
    },
    updateOne: function (columnInput, value, id, callback) {
        orm.updateOne(columnInput, value, id, res => {
            callback(res);
        });
    }
};

module.exports = burgers;
