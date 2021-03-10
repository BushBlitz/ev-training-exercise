// File System Library to read JSON file
const fs = require('fs')
const path = require("path");

const employeesData = "../data/employees.json"
const Employee = require('../model/employee.model')

module.exports.getEmployees = getEmployees

function getEmployees(){
    
    let employees = []
    let rawdata = fs.readFileSync(path.resolve(__dirname,employeesData));
    let rawEmployees = JSON.parse(rawdata);
    rawEmployees.forEach(rawEmployee => {
        employees.push(new Employee(rawEmployee.id,
                                    rawEmployee.firstName,
                                    rawEmployee.lastName))
    });
    

    return employees

}

module.exports.getEmployee = function(id){

    var employees = getEmployees()
    return employees.find(emp => emp.id == id)
}