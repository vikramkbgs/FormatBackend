const express = require('express');


const router = express.Router();
const homeControlller = require('../controllers/home_controller');


console.log('router loaded');

router.get('/', homeControlller.home)


module.exports = router;
