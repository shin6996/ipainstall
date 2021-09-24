var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    let {conversion} = req.query;
    res.render('order', {conversion});
});

module.exports = router;
