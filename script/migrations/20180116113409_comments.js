exports.up = function(knex, Promise){
  return knex.schema.createTable("animals", table => {
    table.increments("comment id").primary()
    table.text("comment")
    table.text("name")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("animals")
}
