const express = require("express")
const app = express()
const queries = require("./queries")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

app.get("/animals", (req, res) => {
  queries
    .list("animals")
    .then(animals => {
      res.json({ animals })
    })
    .catch(console.error)
})

app.get("/facts", (req, res) => {
  queries
    .list("facts")
    .then(facts => {
      res.json({ facts })
    })
    .catch(console.error)
})

app.get("/comments", (req, res) => {
  queries
    .list("comments")
    .then(comments => {
      res.json({ comments })
    })
    .catch(console.error)
})

app.get("/animals/:id", (request, response) => {
  queries
    .read(request.params.id, "animals")
    .then(animals => {
      animals ? response.json({ animals }) : response.sendStatus(404)
    })
    .catch(console.error)
})

app.get("/comments/:id", (request, response) => {
  queries
    .read(request.params.id, "comments")
    .then(comments => {
      comments ? response.json({ comments }) : response.sendStatus(404)
    })
    .catch(console.error)
})

app.get("/facts/:id", (request, response) => {
  queries
    .read(request.params.id, "facts")
    .then(facts => {
      facts ? response.json({ facts }) : response.sendStatus(404)
    })
    .catch(console.error)
})

app.post("/comments", (request, response) => {
  queries
    .create(request.body, "comments")
    .then(comments => {
      response.status(201).json({ comments })
    })
    .catch(console.error)
})

app.post("/animals", (request, response) => {
  queries
    .create(request.body, "animals")
    .then(animals => {
      response.status(201).json({ animals })
    })
    .catch(console.error)
})

app.post("/facts", (request, response) => {
  queries
    .create(request.body, "facts")
    .then(facts => {
      response.status(201).json({ facts })
    })
    .catch(console.error)
})

app.put("/comments/:id", (request, response) => {
  queries
    .update(request.params.id, request.body, "comments")
    .then(comments => {
      response.json({ comments })
    })
    .catch(console.error)
})

app.put("/animals/:id", (request, response) => {
  queries
    .update(request.params.id, request.body, "animals")
    .then(animals => {
      response.json({ animals })
    })
    .catch(console.error)
})

app.put("/facts/:id", (request, response) => {
  queries
    .update(request.params.id, request.body, "facts")
    .then(facts => {
      response.json({ facts })
    })
    .catch(console.error)
})

app.delete("/comments/:id", (request, response) => {
  queries
    .delete(request.params.id, "comments")
    .then(() => {
      response.sendStatus(204)
    })
    .catch(console.error)
})

app.get("/", (req, res) => {
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
