var express = require('express');
var router = express.Router();
// var todosCtrl = require('../controllers/skills');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Dev Skills' });
});

module.exports = router;
