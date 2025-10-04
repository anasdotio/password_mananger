const { Router } = require('express');
const { registerController } = require('../controllers/auth.controller');

const router = Router();

router.route('/register').post(registerController);
router.route('/login').post(() => {});

module.exports = router;
