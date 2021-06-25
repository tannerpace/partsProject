const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10; 

var mysql = require('mysql');

const app = express();


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "passtanner",
    database: 'parts_schema'
  });
  
  db.connect((err) => {
    if (err) {
      throw err;
    }else{
      console.log("Connected!");
  
    }
  });


  app.get("/api", (req, res) => {
    res.json({
        messages: `Welcome to the parts application.  @ ${db.url}`
    });
});





const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


