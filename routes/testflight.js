var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path')

router.get('/', function (req, res, next) {
    let {url} = req.query;
    res.render('testflight', {url});
});

module.exports = router;
