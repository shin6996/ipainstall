var express = require('express');
var router = express.Router();

var is_iOS = function (req) {
    var ua = req.get('User-Agent')
    return /iPhone|iPod/i.test(ua);
}

var is_android = function (req) {
    var ua = req.get('User-Agent')
    return /Android/i.test(ua);
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req.headers.host)

    var ua = req.get('User-Agent');
    if (is_iOS(req)){
        res.redirect("https://testflight.qdryd.top/download?sn=pilipiliY");
    }
    else if (is_android(req)) {
        res.send('安卓下载页面正在开发中......');
    }
    else{
        res.send('respond with a resource');
    }
});

module.exports = router;