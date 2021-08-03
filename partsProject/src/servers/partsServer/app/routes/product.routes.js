module.exports = app => {

    const productController = require("../controllers/partProduct.controller");

    app.get("/api/product", productController.welcome);
    app.get("/api/products", productController.getAllParts);
    app.get("/api/product/number/:num", productController.getPartByNum);
    app.delete("/api/product/:userId", productController.deleteItemById);
    app.get("/api/products/search/:search",productController.searchProducts);
    app.post("/api/add/product", productController.addNewPart);
    app.delete("/api/part/delete/:partNumber",productController.deletePart)
    
    

}