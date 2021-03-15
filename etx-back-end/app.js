const express = require('express')
const app = express()
const port = process.env.PORT || 80
const glob = require('glob')
const path = require('path')
const http = require('http')
var cors = require('cors');

app.use(cors({origin: true, credentials: true}));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Add all routes from Route folder
glob.sync('./src/app/routes/*.route.js').forEach(function (file) {
    app.use(require(path.resolve(file)));
});

var server = http.createServer(app)

server.listen(port, () => {
    console.log(`EV Onboarding App listening at http://localhost:${port}`)
})

module.exports = server