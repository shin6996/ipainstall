var express = require('express');
const axios = require('axios').default;
const https = require('https');

var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const order_id = req.query.order_id;
    const agent = new https.Agent({
        rejectUnauthorized: false
    });
    const order_info = await axios.post('https://www.pipilolo.xyz/api/Notify/GetOrderState', {
        order_id
    }, {
        httpsAgent: agent
    });
    res.send(order_info.data);
    // res.send({code:200,data:{conversion:"7Afe8bEayXei"}});
});

module.exports = router;
