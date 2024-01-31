const mysql = require('mysql2');
const myConfig = require("./config.json")

const connection = mysql.createConnection(myConfig.development);

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connected with Database');
});

module.exports = connection;