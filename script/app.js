const express = require("express")
const app = express()
const queries = require("./queries")
const bodyParser = require("body-parser")
const cors = require("cors")
const stripe = require("stripe")(process.env.STRIPE_KEY)

app.use(bodyParser.json())
app.use(cors())

app.get("/animals", (request, response) => {
  queries
    .list("animals")
    .then(animals => {
      response.json({ animals })
    })
    .catch(console.error)
})

app.get("/facts", (request, response) => {
  queries
    .list("facts")
    .then(facts => {
      response.json({ facts })
    })
    .catch(console.error)
})

app.get("/comments", (request, response) => {
  queries
    .list("comments")
    .then(comments => {
      response.json({ comments })
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

app.delete("/comments/:id", (request, response, next) => {
  queries
    .delete(request.params.id, "comments")
    .then(() => {
      response.sendStatus(204)
    })
    .catch(next)
})

app.get("/", (request, response, next) => {
  queries
    .getAnimalFacts()
    .then(facts => {
      response.json({ facts })
    })
    .catch(next)
})

app.post("/charge", (request, response, next) => {
  charge(
    parseInt(request.body.amount) * 100,
    request.body.service,
    request.body.token
  )
    .then(charge => {
      response.json({ charge })
    })
    .catch(next)
})

function charge(amount, service, token){
  return new Promise((resolve, reject) => {
    stripe.charges.create(
      {
        amount: amount,
        currency: "usd",
        description: service,
        source: token
      },
      (error, charge) => {
        if(error){
          reject(error)
        } else {
          resolve(charge)
        }
      }
    )
  })
}

app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  })
})

module.exports = app
