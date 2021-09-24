var express = require('express');
const axios = require('axios').default;
const https = require('https');

var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const agent = new https.Agent({
        rejectUnauthorized: false
    });
    const order_info = await axios.post('www.pipilolo.xyz/api/Notify/PaymentDiscountMember', {
        product_id: 10,
        channel_id: 8
    }, {
        httpsAgent: agent
    });
    res.send(order_info.data);
});

module.exports = router;
