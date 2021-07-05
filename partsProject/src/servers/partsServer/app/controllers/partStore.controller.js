const bcrypt = require("bcrypt");
const { password } = require("../config/db.config");
const saltRounds = 10;
const db = require("../models/index");
const User = require("../models/user.model.js");


exports.welcome =  (req, res) => {
    console.log("Parts Store is Open!")
  
    res.json({
      messages: `Welcome to the parts application.`
    });


  };
  
  
 exports.createUser = (req, res) => {
    console.log(req.body);
  
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const email = req.body.email;
  
    // const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
  
    let query =
      "INSERT INTO users (firstName, lastName, password, email) VALUES (?,?,?,?);";
  
    db.query(
      query,
      [ firstName, lastName, password, email],
      (err, results) => {
        if (err) {
          if (err.code == "ER_DUP_ENTRY") {
            res.status(409).send({ message: "user already exists!" });
          }
  
          console.error(err);
          res.status(500).send();
          return;
        } else {
          console.log(results);
          res.send("make user");
        }
      }
    );
  };