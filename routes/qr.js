var express = require('express');
var router = express.Router();
var qr = require('qr-image');

router.get('/', function (req, res, next) {
    let host = req.headers.host;
    let url = 'http://' + host + '/download';
    var code = qr.image(url, { type: 'png' });
    res.setHeader('Content-type', 'image/png');
    code.pipe(res);
});

module.exports = router;
