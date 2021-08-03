module.exports = app => {
    const cartController = require("../controllers/Cart.controller");

    app.get("/api/cart", cartController.welcome);
    app.get("/api/cart/:id/:partNumber", cartController.getUserItemId);
    app.get("/api/cart/:userId", cartController.getUserCartItems);
    app.get("/api/cartquantity/:id/:partNumber", cartController.getUserItemQuantity);

    // app.get("/api/carttotal/:id" , cartController.getCartItemQuantityById);

    app.put("/api/cartadd", cartController.addItem);
    app.put("/api/cart/changeQuantity", cartController.changeQuantity);
    app.delete("/api/deleteItem/:id", cartController.deleteItem);

}