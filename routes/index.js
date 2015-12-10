var express = require('express');
var router = express.Router();


/*
var request = require('request');
request({
    url: 'https://api.github.com/search/repositories?q=nodejs',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36'
    }
}, function (error, response, body) {
    console.log(error, response.statusCode, body);
    if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Google homepage.
    }
});
*/



/* GET home page. */
router.get('/mails', function(req, res, next) {
  res.status(200).json({
    message_count: 150,
    messages: []
  });
});

router.post('/contacts', function (req, res) {
    console.log(req.body); // POST messages send the data within the body of the request
    res.status(200).json({
      message: 'Contact created ... '
    });
});

router.post('/generic-form', function (req, res) {
    console.log(req.body);
    res.status(200).json({
      message: 'information saved ... '
    });
});

module.exports = router;
