
//add item wont use reallly
exports.addItem = (req, res) => {

  let userId = req.params.id;


  const partNumber = req.body.partNumber;


  let query = "INSERT INTO `parts`.`cartItems` (`userId`, `partNumber`) \
    VALUES (?, ?);"

  db.query(
    query,
    [userId, partNumber],
    (err, results) => {
      if (err) {


        console.error(err);
        res.status(500).send();
        return;
      } else {
        console.log(results);
        res.send("item added to cart");
      }
    }
  );
};

//get id of items
exports.getUserItems = (req, res) => {

  const userId = req.params.id;
  // select items id by user id
  let query = "SELECT id FROM parts.cartItems where userId = ?;";

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
      res.send(results[0]);
    }
  });

};
//get quantity by id probbly wont use
function getCartItemQuantityById(req, res) {

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








// function addItem(req, res) {
//   console.log("addItemFunction")
//   let userId = req.params.id;
//   console.log(userId);
//   const partNumber = req.params.partNumber;
//   console.log(partNumber);
//   let quantity = (getUserItemQuantity(userId, partNumber))
//   console.log("addItem quantity is ", quantity)
//   let query = "INSERT INTO parts.cartItems (userid, partNumber) \
//     VALUES (?, ?);"

//   db.query(
//     query,
//     [userid, partNumber],
//     (err, results) => {
//       if (err) {


//         console.error(err);
//         res.status(500).send();
//         return;
//       } else {
//         console.log(results);
//         res.send("item added to cart");
//       }
//     }
//   );
// };





 //function to get cart id
  // takes a user id and partNum as param
  // sends the id of the cart back or 0 if it doesn't exist
  function getCartId(userId, partNumber) {

    // select cartid by userId and partNum
    let query = "SELECT id FROM parts.cartItems where userId = ? AND partNumber = ?;";

    db.query(query, [userId, partNumber], (err, results) => {
      if (err) {
        console.error(err);

        return;
      } else {
        if (results.length == 0) {
          //no id found
          let cartId = 0;
          return cartId;
        }
        let cartId = results[0].id;
        return cartId;
      }
    });

  };

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
          return quantity;
        }
        let quantity = results[0].quantity;
        return quantity;
      }
    })

  };