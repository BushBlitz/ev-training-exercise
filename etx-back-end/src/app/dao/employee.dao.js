// File System Library to read JSON file
const e = require('express');
const fs = require('fs')
const path = require("path");

const employeesData = "../data/employees.json"
const Employee = require('../model/employee.model')

module.exports.getEmployees = getEmployees

module.exports.getEmployee = function (id) {

    employees = getEmployees()
    return employees.find(emp => emp.id == id)
}

module.exports.addEmployee = function (firstName, lastName) {
    var employees = getEmployees()
    var id = generateEmployeeID()
    var firstName = firstName
    var lastName = lastName

    employee = new Employee(id,
        firstName,
        lastName)

    employees.push(employee)
    overwriteEmployees(employees)

    return employee
}

module.exports.updateEmployee = function (id, firstName, lastName) {
    var employees = getEmployees()
    var employeeIdx = employees.findIndex((emp => emp.id == id))

    var employee = new Employee(id, firstName, lastName)
    if (employees[employeeIdx] != undefined) {

        employees[employeeIdx].firstName = employee.firstName
        employees[employeeIdx].lastName = employee.lastName

        overwriteEmployees(employees)
    }
    employee = employees[employeeIdx]

    return employee
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

function getMaxEmployeeID(employees) {
    if (employees == undefined) {
        employees = getEmployees()
    }

    return Math.max.apply(Math, employees.map(function (emp) {
        return emp.id;
    }))
}

function generateEmployeeID(employees) {
    return getMaxEmployeeID(employees) + 1;
}

function overwriteEmployees(employees) {
    let data = JSON.stringify(employees, null, 2);
    fs.writeFileSync(path.resolve(__dirname, employeesData), data);
}