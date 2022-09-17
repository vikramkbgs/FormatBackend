const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

// 2. get request from broswer url
router.get('/sign-in', usersController.signIn);

// 3. get request from broswer url
router.get('/sign-up', usersController.signUp);

router.post('/create', usersController.create);

router.post("/create-session", usersController.createSession);

module.exports = router;