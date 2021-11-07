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
  let { invite_id } = req.query;

  var copyObj = { "clipboard": "douyin6996" }

  if (invite_id) {
    copyObj = { "clipboard": "douyin6996", invite_id }
  }

  let host = req.headers.host;
  let cnzz = '<script type="text/javascript"></script>'
  // if (host == 'www.wudichaoren.xyz') {
  //   cnzz = `<script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1280292624'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280292624%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</script>`
  // }
  // else if (host == 'www.lovepaul.xyz')
  // {
  //   cnzz = `<script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1280364418'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1280364418%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</script>`;
  // }

  if (is_iOS(req)) {
    res.render('ios', { copy_info: JSON.stringify(copyObj), cnzz });
  }
  else if (is_android(req)) {
    res.render('android', { copy_info: JSON.stringify(copyObj), cnzz });
  }
  else {
    res.render('pc', { query_info: req.url, cnzz });
  }
});

module.exports = router;
