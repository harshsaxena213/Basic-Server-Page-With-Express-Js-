var express = require('express');
var router = express.Router();
var data=require("./users")

router.get("/",function(req,res){
  res.render("index")
})

module.exports = router;
