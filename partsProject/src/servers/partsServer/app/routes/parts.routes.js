module.exports = app => {
    const partStore = require("../controllers/partStore.controller");

    app.get("/", partStore.welcome);
    app.put("/",partStore.createUser);
    
}