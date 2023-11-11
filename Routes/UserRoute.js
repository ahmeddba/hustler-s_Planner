const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema');
const { getAllUsers, register, login } = require('../Controllers/userController');
const { registerValidation , validator } = require('../Middleware/validator');
const { isAuth } = require('../Middleware/isAuth');

router.post('/register' , registerValidation() , validator , register);

router.get('/allUsers', getAllUsers);

router.post('/login',login);

router.get('/current',isAuth, (req, res) => {
    res.send(req.user);
});

module.exports = router;
