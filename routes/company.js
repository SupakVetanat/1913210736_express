var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController')

const passportJWT = require('../middleware/passportJWT')
const chackAdmin = require('../middleware/checkAdmin')
/* GET users listing. */
// router.get('/', companyController.company);
router.get('/',[passportJWT.isLogin,chackAdmin.isAdmin],companyController.all);

router.get('/:id', companyController.show);

router.post('/', companyController.insert);

router.delete('/:id', companyController.destroy);

router.put('/:id', companyController.update);


// router.get('/bio',companyController.bio );

module.exports = router;
