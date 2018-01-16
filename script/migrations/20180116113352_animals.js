exports.up = function(knex, Promise){
  return knex.schema.createTable("animals", table => {
    table.increments("animal id").primary()
    table.text("animal name")
    table.text("animal scientific name")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("animals")
}
