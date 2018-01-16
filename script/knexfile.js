// Update with your config settings.

require("dotenv").config()

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/dailyAnimalFact_db"
  },

  production: {
    client: "pg",
    connection: DATABASE_URL
  }
}
