var express = require('express');
var router = express.Router();

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
