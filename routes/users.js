var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Hallo Kitty');
  res.status(200).json({
    fullname:'Supak Vetanat'
  })
});

router.get('/bio', function(req, res, next) {
  res.status(200).json({
    fullname:'Supak Vetanat',
    nickname:'Fah',
    Hobby:'Sleep',
    gitusername:'SupakVetanat',
  })
});

module.exports = router;
