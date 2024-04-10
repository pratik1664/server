const express = require('express');
const route = express.Router()
const { adminController } = require('../controller/index')


route.post('/postdata', adminController.adddata)

