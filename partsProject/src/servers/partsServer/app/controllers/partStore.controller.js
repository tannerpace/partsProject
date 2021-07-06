const bcrypt = require("bcrypt");
const { password } = require("../config/db.config");

const saltRounds = 10;
const db = require("../models/index");
const User = require("../models/user.model.js");


exports.welcome = (req, res) => {
  console.log("Parts Store is Open!")

  res.json({
    messages: `Welcome to the parts application.`
  });


};


exports.createUser = async (req, res) => {
  console.log(req.body);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
  const email = req.body.email;

  // const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);

  let query =
    "INSERT INTO users (firstName, lastName, password, email) VALUES (?,?,?,?);";

  db.query(
    query,
    [firstName, lastName, encryptedPassword, email],
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

exports.editUserInfo = (req, res) => {
  let id = req.params.id;

  //******** WARNING: do not update userName in this query? ********
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;


  let query =
    "UPDATE users \
        SET firstName = ?, lastName = ?, email = ? \
        WHERE id = ?;";

  db.query(
    query,
    [firstName, lastName, email, id],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      } else {

        res.send(results[0]);
      }
    }
  );
};

exports.getUserEmail = (req, res) => {
  let email = req.params.email;

  // select user by userName
  let query = "SELECT * FROM users where email = ?;";

  db.query(query, [email], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    } else {
      if (results.length == 0) {
        //no user found
        res.status(404).send({ message: "user not found" });
        return;
      }
      res.send(results[0]);
    }
  });
};