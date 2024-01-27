const dbConfig = require("./config.json");
const mysql = require("mysql");

// Connection with database.
const db = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    dialect: dbConfig.dialect,
});

db.connect((err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected with DB");
    }
});

module.exports = db;