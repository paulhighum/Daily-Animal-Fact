exports.up = function(knex, Promise){
  return knex.schema.createTable("facts", table => {
    table.increments("id").primary()
    table.text("fact")
    table.integer("animal_id").references("animals.id")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("facts")
}
