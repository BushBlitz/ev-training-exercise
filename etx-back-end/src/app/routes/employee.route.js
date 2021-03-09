var express = require('express')
var router = express.Router()

const employeeController = require('../controllers/employee.controller')

const ROUTE_PREFIX = "/employee"

//Sample Route
router.get(ROUTE_PREFIX+'/',employeeController.getEmployees)


module.exports = router