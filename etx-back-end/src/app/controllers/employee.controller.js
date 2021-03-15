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
        res.json(employee)
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

module.exports.deleteEmployee = function(req, res){
    var id = req.params.id

    var employee = employeeDAO.deleteEmployee(id)

    if(employee != undefined){
        res.status(200)
        res.send(employee)
    }
    else{
        res.status(406)
        res.json({"message":"ID not existing!"})
    }
}

module.exports.updateEmployee = function(req, res){
    var requestModel = EmployeeRequestModel.updateEmployeeRequest(req)

    if(requestModel.id == undefined){
        res.status(403)
        res.json({"message":"id is required!"})
    }
    
    var employee = employeeDAO.updateEmployee(requestModel.id, requestModel.firstName, requestModel.lastName)
    if(employee != undefined){
        res.status(200)
        res.json(employee)
    }
    else{
        res.status(406)
        res.json({"message":"ID not existing"})
    }
}
