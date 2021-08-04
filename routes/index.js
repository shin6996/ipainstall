var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path')

var is_mobile = function (req) {
  var ua = req.get('User-Agent')
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(ua);
}

/* GET home page. */
router.get('/', function (req, res, next) {
  let isMobile = is_mobile(req);
  console.log(isMobile);
  if (isMobile) {
    var index = path.resolve(__dirname, '../public/mobile.html');
    fs.readFile(index, 'utf8', (err, text) => {
      res.send(text);
    });
  }
  else {
    var index = path.resolve(__dirname, '../public/pc.html');
    fs.readFile(index, 'utf8', (err, text) => {
      res.send(text);
    });
  }
});

module.exports = router;
