const sql = require("./index.js");

const User = function(user) {
    this.username = user.username;
    this.admin = user.admin; // default is false
    //password will be encrypted before passing into this constructor
}