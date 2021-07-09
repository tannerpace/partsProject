module.exports = app => {
    const cartController = require("../controllers/Cart.controller");

    app.get("/api/cart", cartController.welcome);
    app.get("/api/cart/:id/:partNumber" , cartController.getUserItemId);
    app.get("/api/cartquantity/:id/:partNumber" , cartController.getUserItemQuantity);
    app.get("/api/carttotal/:id" , cartController.getCartItemQuantityById)
   
}