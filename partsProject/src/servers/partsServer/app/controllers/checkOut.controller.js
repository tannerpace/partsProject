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
                res.status(404).send({ message: " hiuser has nothing in cartItems" });
                return;
            }
        }
        res.send(results);
    });
}

exports.buyAll = (req, res) => {
    const userId = req.body.userId;
    const totalPrice = req.body.totalPrice;

    const pastOrderquery = "INSERT INTO parts.pastOrders (`userId`, `totalPrice`) \
    VALUES (?, ?);";

    const getlastQuery = "SELECT LAST_INSERT_ID(id) FROM parts.pastOrders;";
    const cartquery = "SELECT * FROM parts.cartItems where userid = ?;";
    const updatequery = "INSERT INTO parts.orderedItems ( partNumber, quantity, transactionId) VALUES (?, ?, ?);";
    const delquery = "DELETE FROM parts.cartItems WHERE userId = ?;";

    let tranArr = [];
    //first update order Items
    db.query(pastOrderquery, [userId, totalPrice], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send();
            return;
        } else {
            // get transaction id
            console.log("getting last insert")
            db.query(getlastQuery, [], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).send();
                    return;
                }
                const last = results[results.length - 1];
                let transactionId = last["LAST_INSERT_ID(id)"]

                //save the transaction id for later
                tranArr.push(transactionId)

            }); if (err) {
                console.error(err)
            } else {
                // get cart info 
                db.query(cartquery, [userId], (err, results) => {
                    if (err) {
                        console.error(err);
                        return;
                    } else {
                        console.log("got the cart info")

                        //update orderItems for every index
                        results.forEach(element => {
                            let part = element.partNumber
                            let quan = element.quantity
                            let transactionId = tranArr[tranArr.length - 1]
                            db.query(updatequery, [part, quan, transactionId], (err, results) => {
                                if (err) {
                                    console.error(err);
                                    res.status(500).send();
                                    return;
                                }
                                console.log("doing something foreach")

                            });
                        });
                    }
                })
                //then clear cart by user id
                db.query(delquery, [userId], (err, results) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send();
                        return
                    }
                })
            }
        }
        res.send(results)

    });






}


//gets last insert id from parts.pastOrders.
exports.lastInsert = (req, res) => {

    const getlastQuery = "SELECT LAST_INSERT_ID(id) FROM parts.pastOrders;";
    db.query(getlastQuery, [], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send();
            return;
        }
        let endix = results.length - 1;
        console.log(endix);
        const last = results[endix];
        let lastinsert = last["LAST_INSERT_ID(id)"]

        console.log(lastinsert);
        res.send(last);
    });
};

exports.updateOrderItems = (req, res) => {

    let transactionId = req.body.lastInsert
    let partNumber = req.body.partNumber
    let quantity = req.body.quantity

    const qry = "INSERT INTO parts.orderedItems ( partNumber, quantity, transactionId) VALUES (?, ?, ?);";

    db.query(qry, [partNumber, quantity, transactionId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send();
            return;
        }

        res.send(results);
    });
};

