exports.seed = function(knex, Promise){
  return knex("animals")
    .del()
    .then(function(){
      return knex("animals").insert([
        {
          id: 1,
          name: "Spotted Hyena",
          scientific_name: "Crocuta crocuta",
          image: "https://i.imgur.com/75ymT8M.jpg"
        },
        {
          id: 2,
          name: "Black Rhinoceros",
          scientific_name: "Diceros bicornis",
          image: "https://i.imgur.com/WycDVIW.jpg"
        },
        {
          id: 3,
          name: "West Indian Manatee",
          scientific_name: "Trichechus manatus",
          image: "https://i.imgur.com/N7VnfNY.jpg"
        },{
          id: 4,
          name: "Asian Elephant",
          scientific_name: "Elephas maximus",
          image: "https://i.imgur.com/cTYsZek.jpg"
        },{
          id: 5,
          name: "Western Gorilla",
          scientific_name: "Gorilla gorilla",
          image: "https://i.imgur.com/fNMloqL.jpg"
        },{
          id: 6,
          name: "Silky Anteater",
          scientific_name: "Cyclopes didactylus",
          image: "https://i.imgur.com/FgTHaEM.jpg"
        },
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE animals_id_seq RESTART WITH 7;")
    })
}
