SELECT 
    cartItems.quantity, catalog.partName
FROM
    cartItems
UPDATE orderedItems
 ON orderedItems.partNumber = catalog.partNumber
 WHERE cartItems.userId = 3;


 INSERT INTO parts.orderedItems (transactionId,partNumber,quantity)
SELECT 
(SELECTLAST_INSERT_ID(id)) FROM parts.pastOrders,
 parts.orderedItems (partNumber,quantity)
 FROM parts.cartItems WHERE userId = 4;

 INSERT INTO parts.orderedItems (transactionId,partNumber,quantity) 
SELECT LAST_INSERT_ID(parts.pastOrders.id), 
(parts.cartItems.partNumber,parts.cartItems.quantity) WHERE id = '4'

INSERT INTO parts.orderedItems (transactionId,partNumber,quantity) 
SELECT tbl1.LAST_INSERT_ID(id),tbl2.partNumber,tbl2.quantity
from parts.pastorders tbl1, parts.cartItems tbl2, parts.cartItems tbl2

INSERT INTO parts.orderedItems (transactionId,partNumber,quantity) 
SELECT tbl1.LAST_INSERT_ID(id),tbl2.partNumber,tbl2.quantity
from parts.pastorders tbl1, parts.cartItems tbl2, parts.cartItems tbl2
WHERE id = '4'



  buyAll(userId: number, totalPrice: number,) {
    console.log("BUY!ALL")
    console.log(userId, totalPrice)
    // do something here
    // POST a new 'past order'
    this.checkOutService.buyAll(userId, totalPrice)
      .subscribe(data => {
        this.checkOutService.getLast().subscribe(data => {
          let lastinsert = data["LAST_INSERT_ID(id)"]
          //here is where you will send the post request to
          this.productService.deleteItemById(userId).subscribe()
          //nav away
        }, err => {
          console.error(err)
        })

        this.router.navigate(["pastOrders"])

        // DELETE items from cart (WHERE userID = ?)
        // remove all items from cart
        // go to "purchase confirmed page" - or the 'past orders' page
      }