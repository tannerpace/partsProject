const { password } = require("../config/db.config");
const db = require("../models/index");
const Product = require("../models")

exports.welcome = (req, res) => {
    res.json({
        messages: `Welcome to the parts products controller application.`
    });
};

exports.getAllParts = (req, res) => {
    let query = "SELECT * FROM parts.catalog;";
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send();
            return;
        } else {
            if (results.length == 0) {
                //no part found
                res.status(404).send({ message: "part not found" });
                return;
            }
            console.log(results)
            res.send(results);
        }
    });

};


exports.getPartByNum = (req, res) => {

    let partsNum = req.params.partNum;

    // select part by partNumber
    let query = "SELECT * FROM parts.catalog where partNumber = ?;";

    db.query(query, [partsNum], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send();
            return;
        } else {
            if (results.length == 0) {
                //no part found
                res.status(404).send({ message: "part not found" });
                return;
            }
            console.log(results[0])
            res.send(results[0]);
        }
    });

}

exports.deleteItemById = (req, res) => {
    let userId = req.params.userId;

    // select part by partNumber
    let query = "DELETE FROM parts.cartItems WHERE userId = ?;"
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send();
            return;
        } else {
            if (results.length == 0) {
                //no part found
                res.status(404).send({ message: "part not found" });
                return;
            }
            console.log(results)
            res.send({ message: "ALL PARTS REMOVED FROM USER ITEMS CART!" });
        }

    });


}