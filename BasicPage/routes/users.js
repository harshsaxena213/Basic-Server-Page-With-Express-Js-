var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/newdatabase")
var data = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  other: {
    type: Array,
    default: []
  }
})

var dataexpo = mongoose.model("getmedata", data)
module.exports = dataexpo
module.exports = router;
