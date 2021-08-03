module.exports = app => {
    const checkOutController = require("../controllers/checkOut.controller");
    app.get("/api/checkout/hi", checkOutController.welcome);
    app.get("/api/checkout/:userId", checkOutController.getCartByUserId);
    app.put("/api/checkout",checkOutController.buyAll );
    app.get("/api/what/lastinsert",checkOutController.lastInsert);
    app.put("/api/orderItems", checkOutController.updateOrderItems)
}