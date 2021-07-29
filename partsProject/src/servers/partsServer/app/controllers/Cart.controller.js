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

//depends on two functions//
//incrementQuantity//
// addfirst//
exports.addItem = (req, res) => {

  let userId = req.body.userId;
  let partNumber = req.body.partNumber;

  console.log(userId, partNumber, req.body)

  // select cartid by userId and partNum
  let idquery = "SELECT id FROM parts.cartItems where userId = ? AND partNumber = ?;";

  db.query(idquery, [userId, partNumber], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send(err)
      return;
    } else if (results.length == 0) {
      //nopart in database with this userId and partNum
      //add a new part
      addFirst(userId, partNumber);
      res.send({ message: "item added to cart" })
    } else {
      let theId = results[0].id;
      //increase quantity by cart id.
      incrementQuantity(req, res, theId)
      console.log('increment finished')
    }
  });
  console.log("waiting to send response")
};

//function to add item make quantity 1
function addFirst(userId, partNumber) {

  console.log('adding first')

  let query = "INSERT INTO parts.cartItems (userId, partNumber, quantity) \
    VALUES (?, ?, 1);"

  db.query(query, [userId, partNumber], (err, results) => {
    if (err) {
      console.error(err);
      return results;
    } else {
      console.log(results);
      console.log("item", partNumber, "added to a cart");
      return results;
    }
  }
  );
};

//returns 0 if row doesn't exist, or the id of item
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




//function to update cart quantity by id
function incrementQuantity(req, res, cartId) {
  let query = "UPDATE parts.cartItems SET quantity = quantity + 1 where id = ?;";

  console.log("incrementing")

  db.query(query, [cartId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send(err)
      return;
    } else {
      console.log(results);

      console.log("increment happened")
      res.send({ message: "increment successful" })
    }
  });

};

exports.getUserCartItems = (req, res) => {

  let query = "SELECT * FROM parts.cartItems where userid = ?;";
  const userId = req.params.userId;

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log("")
      res.send(results);

    }
  });

};


//Broken function to return quantity of cartItems if you put in user id and partNumber
function amount(userId, partNumber) {
  console.log("amount function start line 117")

  // select quantity from data base
  let query = "SELECT * FROM parts.cartItems where userId = ? AND partNumber = ?;";

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

//decreases quantity of cart items by id
exports.changeQuantity = (req, res) => {

  let id = req.body.id;
  let quantity = req.body.quantity;

  let query = "UPDATE parts.cartItems SET quantity = ? WHERE id = ?;";

  db.query(query, [quantity, id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return
    } else {
      console.log(results)
    }

  });
}

exports.deleteItem = (req, res) => {
  console.log("cart control DELETE!")
  let id = req.params.id;
  let query = "DELETE FROM parts.cartItems WHERE id = ?;";

  db.query(query, [id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return
    } else {
      res.send(results)

    }
  })
}





