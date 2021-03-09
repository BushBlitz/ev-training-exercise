const url = require('url')

const employeeDAO = require('../dao/employee.dao')

module.exports.getEmployees = function (req, res) {
    this.id = req.query.id
    if (this.id != undefined) {
        this.employee = employeeDAO.getEmployee(this.id)
        if (this.employee == undefined) {
            res.status(404)
            res.send('Employee not found!')
        } else {
            res.status(200)
            res.send(this.employee)
        }
    } else {
        res.status(200)
        res.send(employeeDAO.getEmployees())
    }

}