// Request model of adding employee
module.exports.addEmployeeRequest = function (req) {

    const body = req.body
    return {
        "firstName": body.firstName,
        "lastName": body.lastName
    }
}