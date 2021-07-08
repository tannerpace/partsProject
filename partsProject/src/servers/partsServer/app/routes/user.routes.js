module.exports = app => {
    const serverFunction = require("../controllers/partUser.controller");

    app.get("/", serverFunction.welcome);
    app.get("/user/:email", serverFunction.getUserEmail);
    app.post("/user", serverFunction.createUser);
    app.put("/user/:id", serverFunction.editUserInfo);
    app.delete("/user/:id", serverFunction.deleteUser);
    app.post("/user/login", serverFunction.login)
}