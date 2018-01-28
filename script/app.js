const express = require("express")
const app = express()
const queries = require("./queries")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
  queries
    .list()
    .then(animals => {
      res.json({ animals })
    })
    .catch(console.error)
})

app.get("/facts", (req, res) => {
  queries
    .combine()
    .then(facts => {
      res.json({ facts })
    })
    .catch(console.error)
})

app.use((request, response) => {
  response.send(404)
})

module.exports = app
