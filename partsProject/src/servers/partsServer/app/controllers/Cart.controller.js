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



//function to add item make quantity 1
function addfirst(userId, partNumber) {
  let quantity = 1;

  let query = "INSERT INTO parts.cartItems (userId, partNumber, quantity) \
    VALUES (?, ?, 1);"

  db.query(query, [userId, partNumber, quantity], (err, results) => {
    if (err) {
      console.error(err);

      return results;
    } else {
      console.log(results);
      console.log("item", partNumber, "ammount", quantity, "added to a cart");
      return results;
    }
  }
  );
};



//function to return quantity if you put in user id and partNumber
function amount(userId, partNumber) {
  console.log("amount function start line 117")

  // select quantity from data base
  let query = "SELECT quantity FROM parts.cartItems where userId = ? AND partNumber = ?;";

  db.query(query, [userId, partNumber], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    } else {
      //nothing found
      console.log("results of ammount function are ", results, " at line 127")
      if (results.length == 0) {
        let quantity = 0;
        console.log("results length 0", quantity, "line 131")
        return quantity;
      }
      else
        console.log("result length not 0 return", (results[0].quantity), " at line 134")
      return results[0].quantity;
    }
  });

};


//returns 0 if row doesn't exit, or the id of item
function getCartId(userId, partNumber) {

  // select cartid by userId and partNum
  let query = "SELECT id FROM parts.cartItems where userId = ? AND partNumber = ?;";

  db.query(query, [userId, partNumber], (err, results) => {
    if (err) {
      console.error(err);

      return;
    } else {
      if (results.length == 0) {
        //nopart in database with this userId and partNum
        return 0;

      }
      return results[0].id;

    }
  });

};


//function to get cart id
// takes a user id and partNum as param
// sends the id of the cart back or 0 if it doesn't exist


// function gets the quantity if you put in cart id  
function QuantityById(cartId) {

  // get quantity by cartid
  let query = "SELECT quantity FROM parts.cartItems where id = ?;";

  db.query(query, [cartId], (err, results) => {
    if (err) {
      console.error(err);

      return;
    } else {
      if (results.length == 0) {
        //no quantity found
        let quantity = 0;
        console.log("len 0", quantity)
        return quantity;
      }
      let quantity = results[0].quantity;
      console.log("len 1", quantity);
      return quantity;
    }
  });

};

//depends on two functions//
//incrementQuantity//
// addfirst//
exports.addItem = (req, res) => {

  let theId;
  let userId = req.params.userId;
  let partNumber = req.params.partNumber;
  // select cartid by userId and partNum
  let idquery = "SELECT id FROM parts.cartItems where userId = ? AND partNumber = ?;";

  db.query(idquery, [userId, partNumber], (err, results) => {
    if (err) {
      console.error(err);

      return;
    } else {
      if (results.length == 0) {
        //nopart in database with this userId and partNum
        let theId = 0;

        if (theId === 0) {
          //add a new part
          addfirst(userId, partNumber);

        } else if (theId >= 1) {
          //already a part in database
          incrementQuantity(theId)
        }

      } else {
        let theId = results[0].id;
        if (theId === 0) {
          addfirst(userId, partNumber);

        } else if (theId >= 1) {
          //increase quantity by cart id.
          incrementQuantity(theId)
        }

      }
    }
  });
};


//function to update cart quantity by id
function incrementQuantity(cartId) {
  let query = "UPDATE parts.cartItems SET quantity = quantity + 1 where id = ?;";

  db.query(query, [cartId], (err, results) => {
    if (err) {
      console.error(err);

      return;
    } else {
      if (results.length == 0) {
        //no quantity found
        console.log("nothing happend")
      }
      return results
    }
  });

};

