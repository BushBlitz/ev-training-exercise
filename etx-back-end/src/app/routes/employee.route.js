var express = require('express')
var router = express.Router()

const employeeController = require('../controllers/employee.controller')

const ROUTE_PREFIX = "/employee"

//GET Employee Route
router.get(ROUTE_PREFIX+'/:id',employeeController.getEmployee)

//GET Employees Route
router.get(ROUTE_PREFIX+'/',employeeController.getEmployees)

//POST Employee
router.post(ROUTE_PREFIX+"/",employeeController.addEmployee)

//PUT Employee
router.put(ROUTE_PREFIX+"/",employeeController.updateEmployee)


module.exports = router