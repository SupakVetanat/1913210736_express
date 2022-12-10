var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')

/* GET users listing. */
router.get('/', staffController.staff);

router.get('/:id', staffController.show);

router.post('/', staffController.insert);

router.delete('/:id', staffController.destroy);

router.put('/:id', staffController.update);


// router.get('/bio',companyController.bio );

module.exports = router;
