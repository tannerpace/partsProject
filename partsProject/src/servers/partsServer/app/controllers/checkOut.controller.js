const db = require("../models/index");
const Product = require("../models")






exports.welcome = (req, res) => {
    res.json({
        messages: `Welcome to the parts checkOut controller application.`
    });
};

// inner join items and catalog by partNumber pull price name and quantity
exports.getCartByUserId = (req, res) => {
    //select by user id

    let userId = req.params.userId;


    const query = "SELECT cartItems.id, cartItems.quantity, catalog.price, catalog.partName \
                    FROM cartItems \
                    INNER JOIN catalog \
                        ON cartItems.partNumber = catalog.partNumber \
                    WHERE cartItems.userId = ?;";

    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send();
            return;
        } else {
            if (results.length == 0) {
                //no part found
                res.status(404).send({ message: "user has nothing in cartItems" });
                return;
            }
        }
        res.send(results);
    });
}

exports.buyAll = (req, res) => {
    let userId = req.body.userId;
    let totalPrice = req.body.totalPrice;
    //update the orded items table

    const query = "INSERT INTO parts.pastOrders (`userId`, `totalPrice`) \
    VALUES (?, ?);";



    db.query(query, [userId, totalPrice], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send();
            return;
        } else {
            if (results.length == 0) {
                //no part found
                res.status(404).send({ message: "user has nothing in cartItems" });
                return;
            }
        }
        res.send(results);
    });




}



