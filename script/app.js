const express = require("express")
const app = express()
const queries = require("./queries")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.get("/animals", (request, response) => {
  queries
    .list()
    .then(animals => {
      response.json({ animals })
    })
    .catch(console.error)
})

module.exports = app
