const mongoose = require("mongoose");
const router = require("./routes.js");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());

app.use("/", router);

module.exports = app;
