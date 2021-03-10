// Request model of adding employee
module.exports.addEmployeeRequest = function (req) {

    const body = req.body
    return {
        "firstName": body.firstName,
        "lastName": body.lastName
    }
}

module.exports.updateEmployeeRequest = function (req) {

    const body = req.body
    return {
        "id": body.id,
        "firstName": body.firstName,
        "lastName": body.lastName
    }
}