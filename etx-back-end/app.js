const express = require('express')
const app = express()
const port = 80
const glob = require('glob')
const path = require('path')


// Add all routes from Route folder
glob.sync('./src/app/routes/*.route.js').forEach(function (file) {
    console.log("Route Path:",path.resolve(file));
    app.use(require(path.resolve(file)));
});


app.listen(port, () => {
    console.log(`EV Onboarding App listening at http://localhost:${port}`)
})