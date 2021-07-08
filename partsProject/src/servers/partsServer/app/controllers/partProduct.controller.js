const { password } = require("../config/db.config");
const db = require("../models/index");
const User = require("../models/user.model.js");

exports.welcome = (req, res) => {
    res.json({
        messages: `Welcome to the parts products controller application.`
    });
};

exports.getPartByNum = (req, res) => {
    
}