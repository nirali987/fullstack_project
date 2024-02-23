var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');

/* GET home page. */
router.post('/insert', user.insert);
router.post('/select', user.select_data);

module.exports = router;
