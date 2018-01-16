exports.up = function(knex, Promise){
  return knex.schema.createTable("animals", table => {
    table.increments("fact id").primary()
    table.text("fact")
    table.integer("animal id")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("animals")
}
