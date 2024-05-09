const express = require('express');
const validate = require('../middlewares/validate');

const authController = require('../controllers/auth.controller');
const authValidation = require('../validations/auth.validation');

const router = express.Router();

router
 .route('/signUp')
 .post(validate(authValidation.signUp), authController.createUser);

router
 .route('/logIn')
 .post(validate(authValidation.logIn), authController.logIn);

module.exports = router;