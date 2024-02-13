const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authController = require('../controller/auth-controller')
const authproductscontroller = require('../controller/products-controller')
const authcontrollerTableReservation = require('../controller/controller-TableReservation')

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/me', authenticate, authController.getme) 
router.get('/product', authenticate, authproductscontroller.getProduct) 
router.post('/TableReservation', authenticate, authcontrollerTableReservation.postTableReservations) 


module.exports = router