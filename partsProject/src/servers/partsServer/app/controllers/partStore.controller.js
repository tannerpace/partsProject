const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../models/index");
const User = require("../models/user.model.js");

exports.welcome =  (req, res) => {
    res.json({
      messages: `Welcome to the parts application.  @ ${db.url}`
    });
  };
  