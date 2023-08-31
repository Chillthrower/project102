// const express = require('express');
import express from 'express'
const router = express.Router();
const register = require('../controllers/auth.js');
const login = require('../controllers/auth.js');
const logout = require('../controllers/auth.js');


router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);



module.exports=router