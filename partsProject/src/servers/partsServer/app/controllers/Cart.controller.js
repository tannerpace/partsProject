const db = require("../models/index");

exports.welcome = (req, res) => {
    res.json({
        messages: `Welcome to the parts cart controller application.`
    });
};

//returns cart id
// takes a user id and partNum as param
// sends the id of the cart back as an array at index 0
exports.getUserItemId = (req, res) => {

    const userId = req.params.id;
    const partNumber = req.params.partNumber;
    // select cartid by userId and partNum
    let query = "SELECT id FROM parts.cartItems where userId = ? AND partNumber = ?;";
  
    db.query(query, [userId, partNumber], (err, results) => {
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

   //gets the quantity if you put in user id and partNumber
exports.getUserItemQuantity = (req, res) => {

    const userId = req.params.id;
    const partNumber = req.params.partNumber;
    // select user by userId
    let query = "SELECT quantity FROM parts.cartItems where userId = ? AND partNumber = ?;";
  
    db.query(query, [userId, partNumber], (err, results) => {
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

// gets the quantity if you put in cart id  
exports.getCartItemQuantityById = (req, res) => {

    const cartId = req.params.id;
 
    // get quantity by cartid
    let query = "SELECT quantity FROM parts.cartItems where id = ?;";
  
    db.query(query, [cartId], (err, results) => {
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

function getCartItemQuantityById  (req, res) {

    const cartId = req.params.id;
 
    // select item by cartId
    let query = "SELECT quantity FROM parts.cartItems where id = ?;";
  
    db.query(query, [cartId], (err, results) => {
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
        return results[0];
      }
    });

};


