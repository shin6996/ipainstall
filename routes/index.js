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
  let { invite_code, channel_id } = req.query;

  var copyObj = { "clipboard": "pilipili" }

  if (invite_code) {
    copyObj = { "clipboard": "pilipili", invite_code }
  }
  else if (channel_id) {
    copyObj = { "clipboard": "pilipili", channel_id }
  }

  let host =  req.headers.host;

  if (is_iOS(req)) {
    res.render('ios', { copy_info: JSON.stringify(copyObj) });
  }
  else if (is_android(req)) {
    res.render('android', { copy_info: JSON.stringify(copyObj) });
  }
  else {
    res.render('pc', { query_info: req.url });
  }
});

module.exports = router;
