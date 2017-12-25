var express = require('express');
var conf = require('../lib/conf');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'DigiConf',
  });
});

router.post('/', function(req, res) {
  conf.generate(req.body, (err, conf) => {
    if (err) {
      return res.status(400).send('Error');
    }
    return res.status(201).json(conf);
  });
});

module.exports = router;
