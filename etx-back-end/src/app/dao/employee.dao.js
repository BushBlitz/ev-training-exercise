// File System Library to read JSON file
const fs = require('fs')
const path = require("path");

const employeesData = "../data/employees.json"
const Employee = require('../model/employee.model')

module.exports.getEmployees = function(){
    
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

    this.employees =this.getEmployees()
    return this.employees.find(emp => emp.id == id)
}