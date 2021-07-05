const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require('mysql');

const app = express();
var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./app/routes/parts.routes")(app);
require("./app/models/index")









const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Hello server is running on port ${PORT}.`);
});


