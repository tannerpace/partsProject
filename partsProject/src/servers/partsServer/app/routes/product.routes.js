module.exports = app => {
    const productController = require("../controllers/partProduct.controller");

    app.get("/product", productController.welcome);
    app.get("/product/number:num", productController.getPartByNum)

}