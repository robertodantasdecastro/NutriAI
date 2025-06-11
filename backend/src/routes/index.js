const { Router } = require('express');
const auth = require('./auth');
const meals = require('./meals');

const router = Router();

router.use('/auth', auth);
router.use('/meals', meals);

module.exports = router;
