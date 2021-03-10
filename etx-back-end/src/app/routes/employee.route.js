var express = require('express')
var router = express.Router()

const ROUTE_PREFIX = "/employee"

//Sample Route
router.get(ROUTE_PREFIX+'/', (req, res) => {
    res.status(200)
    res.send("Employees")
})


module.exports = router