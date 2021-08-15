var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path')

var is_mobile = function (req) {
  var ua = req.get('User-Agent')
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(ua);
}

var is_iOS = function (req) {
  var ua = req.get('User-Agent')
  return /iPhone|iPod/i.test(ua);
}

var is_android = function (req) {
  var ua = req.get('User-Agent')
  return /Android/i.test(ua);
}

/* GET home page. */
router.get('/', function (req, res, next) {
  let {invite_code} = req.query;
  let copyObj = {"clipboard":"pilipili",invite_code}

  if (is_iOS(req)) {
    res.render('ios', {invite_info:JSON.stringify(copyObj)});
  }
  else if (is_android(req))
  {
    res.render('android', {invite_info:JSON.stringify(copyObj)});
  }
  else {
    var index = path.resolve(__dirname, '../public/pc.html');
    fs.readFile(index, 'utf8', (err, text) => {
      res.send(text);
    });
  }
});

module.exports = router;
