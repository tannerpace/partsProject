module.exports = app => {
    const partStore = require("../controllers/partStore.controller");

    app.get("/", partStore.welcome);
    
}