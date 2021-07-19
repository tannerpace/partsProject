module.exports = app => {

    const productController = require("../controllers/partProduct.controller");

    app.get("/api/product", productController.welcome);
    app.get("/api/products", productController.getAllParts);
    app.get("/api/product/number/:num", productController.getPartByNum);
    app.delete("/api/product/:userId", productController.deleteItemById)

}