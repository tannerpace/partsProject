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
        res.send({ message: "user created successfully" });
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

exports.deleteUser = (req, res) => {
  let id = req.params.id;

  let query = "DELETE FROM users where id = ?;";

  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).send();
      return;
    } else {
      if (results.length == 0) {
        res.status(404).send({ message: "can not remove an empty user" });
        return;
      }
      res.send(results[0]);
    }
  });
};

exports.login = (req, res) => {
  let password = req.body.password;
  let email = req.body.email;
  let query = "Select * from users Where email=?;";

  db.query(query, [email], async (err, data) => {
    if (err) {
      res.status(500).send({ message: "error occured" });
    } else if (data && data.length == 0) {
      //empty request
      res.status(400).send({ message: "Email not found" });
      return;
    } else {
      const comparison = await bcrypt.compare(password, data[0].password);
      if (comparison) {
        console.log("password successs");
        res.send(data[0]);
      } else {
        res.status(204).send({ message: "Password does not match" });
      }
    }
  });
};


//woring gets past orders by user id
exports.getPastOrders = (req, res) => {

  let userId = req.params.userId;

  // select user by userName
  // select order date, order total, order id
  // from orders
  // where userId = ?

  let query = "SELECT * FROM parts.pastOrders WHERE userId = ?";

  db.query(query, [userId], (err, results) => {
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
      //got past orders successfully
      res.send(results);
    }
  });
};

exports.getOrderInfo = (req, res) => {

  let transactionId = req.params.id;

  // select user by userName
  // select order date, order total, order id
  // from orders
  // where userId = ?

  let query = "SELECT * FROM parts.orderedItems WHERE transactionId = ?";

  db.query(query, [transactionId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    } else {
      if (results.length == 0) {
        //no user found
        res.status(404).send({ message: "No orders found with that transaction Id" });
        return;
      }
      //got past orders successfully
      res.send(results);
    }
  });
};

exports.getUserById = (req, res) => {
  let id = req.params.id;

  // select user by id
  let query = "SELECT * FROM parts.users where id = ?;";

  db.query(query, [id], (err, results) => {
    console.log(results);
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    } else {
      if (results.length == 0) {
        //no user found
        res.status(404).send({ message: "user id not found" });
        return;
      }
      res.send(results[0]);
    }
  });
};

exports.getUser = (req, res) => {
  let email = req.params.email;

  // select user by userName
  let query = "SELECT * FROM parts.users where email = ?;";

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


exports.getOrderConfirm = (req, res) => {

  let Id = req.params.id;



  let query = "SELECT * FROM parts.pastOrders WHERE Id = ?";

  db.query(query, [transactionId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    } else {
      if (results.length == 0) {
        //no user found
        res.status(404).send({ message: "No orders found with that transaction Id" });
        return;
      }
      //got past orders successfully
      res.send(results);
    }
  });
};