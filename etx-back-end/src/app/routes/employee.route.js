var express = require('express')
var router = express.Router()

const employeeController = require('../controllers/employee.controller')

const ROUTE_PREFIX = "/employee"

//GET Employee Route
router.get(ROUTE_PREFIX+'/:id',employeeController.getEmployee)

//GET Employees Route
router.get(ROUTE_PREFIX+'/',employeeController.getEmployees)


module.exports = router