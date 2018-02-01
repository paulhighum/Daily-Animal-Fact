const database = require("./database-connection")

module.exports = {
  list(table){
    return database(table).select()
  },
  
  combine(){
    return database("facts")
      .join("animals", "animals.id", "=", "facts.animal_id")
      .select("facts.id", {animal_id: "animals.id"}, "animals.name", "animals.scientific_name", "animals.image", "facts.fact")
  }
}
