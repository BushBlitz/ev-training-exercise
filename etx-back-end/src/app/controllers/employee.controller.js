const employeeDAO = require('../dao/employee.dao')
const EmployeeRequestModel = require("../model/request/employee.request.model")

module.exports.getEmployee = function (req, res) {
    var id = req.params.id
    var employee = employeeDAO.getEmployee(id)

    if (employee == undefined) {
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


module.exports.addEmployee = function(req, res){
    var requestModel = EmployeeRequestModel.addEmployeeRequest(req)

    var employee = employeeDAO.addEmployee(requestModel.firstName, requestModel.lastName)
    res.send(employee)
}
