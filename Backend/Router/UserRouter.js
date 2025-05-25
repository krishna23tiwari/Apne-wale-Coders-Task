const express = require('express')
const router = express.Router()
const userControl = require('../Controller/USerController')


router.post('/signup', userControl.Signup)

router.post('/login', userControl.login)

module.exports = router