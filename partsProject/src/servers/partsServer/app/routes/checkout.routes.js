module.exports = app => {
    const checkOutController = require("../controllers/checkOut.controller");
    app.get("/api/checkout/hi", checkOutController.welcome);
    app.get("/api/checkout/:userId", checkOutController.getCartByUserId);
    app.post("/api/checkout",checkOutController.buyAll )
}