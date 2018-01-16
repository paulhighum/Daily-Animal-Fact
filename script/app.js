const express = require("express")
const app = express()
const queries = require("./queries")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

module.exports = app
