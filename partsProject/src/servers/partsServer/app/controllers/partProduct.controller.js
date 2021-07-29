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

exports.searchProducts = (req, res) => {

    search = '%' + req.params.search + '%'
  
    var searchusers = `SELECT * FROM parts.catalog WHERE (partName LIKE ? OR PrimaryVendor LIKE ? OR color LIKE ? OR price LIKE ?)`
  
    db.query(searchusers, [search, search, search, search], function (err, results) {
      if (err) {
        res.send(err)
      } else {
        res.send(results)
      }
    })
  };

  exports.addNewPart = (req,res) => {

  
        let partNumber = req.body.partNumber;
        let PrimaryVendor = req.body.primaryVendor;
        let color = req.body.color;
        let partName = req.body.partName;
        let price = req.body.price;
        let catagory = req.body.catagory;
        let img = req.body.img;
     

    // Insert part 
    const query = "INSERT INTO parts.catalog (partNumber, PrimaryVendor, color, partName, price, Category) VALUES (?, ?, ?, ?, ?, ?);";

    db.query(query, [partNumber,PrimaryVendor,color,partName,price,catagory,img], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send();
            return;
        } else {
            if (results.length == 0) {
                //no part found
                res.status(404).send({ message: "Error adding new part for sale"});
                return;
            }
            console.log(results)
            res.send({ message: "New part added!" });
        }

    });

  };

  exports.deletePart = (req,res) => {
    
      let partNumber = req.params.partNumber
      
      let query = "DELETE from parts.catalog WHERE (partNumber = ?);";
      db.query(query,[partNumber], (err,results) => {
          if (err){
              console.error(err)
              res.status(500).send();
          }
          console.log(results)
          res.send({message:"cart CONTROLLER DESTROYING A PART !"})
      })
  };