exports.up = function(knex, Promise){
  return knex.schema.createTable("comments", table => {
    table.increments("id").primary()
    table.text("comment")
    table.text("name")
    table.integer("animal_id").references("animals.id")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("comments")
}
