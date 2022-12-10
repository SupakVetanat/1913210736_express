var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')

/* GET users listing. */
router.get('/', staffController.staff);
router.post('/', staffController.insert);

// router.get('/bio',companyController.bio );

module.exports = router;
