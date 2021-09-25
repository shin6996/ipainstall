var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const https = require('https');

router.get('/', async function (req, res, next) {
    const agent = new https.Agent({
        rejectUnauthorized: false
    });
    const order_info = await axios.post('https://www.pipilolo.xyz/api/Notify/PaymentDiscountMember', {
        product_id: 10,
        channel_id: 8
    }, {
        httpsAgent: agent
    });

    if (order_info.data.code == 200)
    {
        res.render('pay', order_info.data.data);
    }
    else
    {
        res.render('error');
    }
});

module.exports = router;
