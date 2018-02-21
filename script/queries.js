const database = require("./database-connection")

module.exports = {
  list(table){
    return database(table).select()
  },
  read(id, table){
    return database(table)
      .select()
      .where("id", id)
      .first()
  },
  create(item, table){
    return database(table)
      .insert(item)
      .returning("*")
      .then(record => record[0])
  },
  update(id, item, table){
    return database(table)
      .update(item)
      .where("id", id)
      .returning("*")
      .then(record => record[0])
  },
  delete(id, table){
    return database(table).delete().where("id", id)
  },
  getAnimalFacts(){
    return database("facts")
      .join("animals", "animals.id", "=", "facts.animal_id")
      .select("facts.id", {animal_id: "animals.id"}, "animals.name", "animals.scientific_name", "animals.image", "facts.fact")
  }
}
