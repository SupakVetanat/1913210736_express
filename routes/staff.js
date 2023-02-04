var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')

const { body } = require('express-validator');
const passportJWT = require('../middleware/passportJWT')

/* GET users listing. */
router.get('/',[passportJWT.isLogin], staffController.staff);

router.get('/:id', staffController.show);

router.post('/',[
    body("name").not().isEmpty().withMessage("กรุณากรอกชื่อ-สกุล"),
    body("salary").not().isEmpty().withMessage("กรุณากรอกเงินเดือน").isNumeric().withMessage("เงินเดือนต้องเป็นตัวเลขเท่านั้น"),
  ], staffController.insert);

router.delete('/:id', staffController.destroy);

router.put('/:id', staffController.update);


// router.get('/bio',companyController.bio );

module.exports = router;
