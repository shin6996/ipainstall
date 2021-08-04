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
    res.redirect(req.headers.host);
});

module.exports = router;