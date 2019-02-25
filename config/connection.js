// Set up MySQL connection.
var mysql = require("mysql");

//Pass read using dotenv
require('dotenv').config();
var password = require("./pass.js")
var pass = password.pass.id;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: pass,
    database: "burgers_db"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
