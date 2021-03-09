// File System Library to read JSON file
const e = require('express');
const fs = require('fs')
const path = require("path");

const employeesData = "../data/employees.json"
const Employee = require('../model/employee.model')

module.exports.getEmployees = getEmployees

module.exports.getEmployee = function (id) {

    this.employees = getEmployees()
    return this.employees.find(emp => emp.id == id)
}


function getEmployees() {

    let employees = []
    let rawdata = fs.readFileSync(path.resolve(__dirname, employeesData));
    let rawEmployees = JSON.parse(rawdata);
    rawEmployees.forEach(rawEmployee => {
        employees.push(new Employee(rawEmployee.id,
                                    rawEmployee.firstName,
                                    rawEmployee.lastName))
    });


    return employees

}

module.exports.addEmployee = function (firstName, lastName) {
    this.employees = getEmployees()
    this.id = generateEmployeeID()
    this.firstName = firstName
    this.lastName = lastName

    this.employee = new Employee(this.id,
                                 this.firstName,
                                 this.lastName)

    this.employees.push(this.employee)
    overwriteEmployees(this.employees)
}

function getMaxEmployeeID() {
    this.employees = getEmployees()

    return Math.max.apply(Math, this.employees.map(function (emp) {
        return emp.id;
    }))
}

function generateEmployeeID() {
    return getMaxEmployeeID() + 1;
}

function overwriteEmployees(employees){
    let data = JSON.stringify(employees,null, 2);
    fs.writeFileSync(path.resolve(__dirname, employeesData), data);
}