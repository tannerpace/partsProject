const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// Connection to the database
const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

// MySQL connection
connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log("Connected to database")
    }
});

module.exports = connection;
