const url = require('url')

const employeeDAO = require('../dao/employee.dao')

module.exports.getEmployee = function (req, res) {
    this.id = req.params.id
    this.employee = employeeDAO.getEmployee(this.id)

    if (this.employee == undefined) {
        res.status(404)
        res.json({"message":'Employee not found!'})
    } else {
        res.status(200)
        res.json(this.employee)
    }

}

module.exports.getEmployees = function (req, res) {
    res.status(200)
    res.json(employeeDAO.getEmployees())
}

const EmployeeRequestModel = require("../model/request/employee.request.model")
module.exports.addEmployee = function(req, res){
    this.requestModel = EmployeeRequestModel.addEmployeeRequest(req)

    employeeDAO.addEmployee(this.requestModel.firstName, this.requestModel.lastName)
    res.send(this.requestModel)
}
