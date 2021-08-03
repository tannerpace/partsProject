module.exports = app => {
    const serverFunction = require("../controllers/partUser.controller");

    app.get("/", serverFunction.welcome);
    app.get("/api/user/id/:id", serverFunction.getUserById);
    app.get("/user/:email", serverFunction.getUserEmail);
    app.post("/user", serverFunction.createUser);
    app.put("/user/:id", serverFunction.editUserInfo);
    app.delete("/user/:id", serverFunction.deleteUser);
    app.post("/user/login", serverFunction.login);
    app.get("/api/user/:email", serverFunction.getUser);

    app.get("/api/orders/:userId", serverFunction.getPastOrders);
    app.get("/api/details/:id", serverFunction.getOrderInfo);
    app.get("/api/user/Confirmed/:Id", serverFunction.getOrderConfirm)
}