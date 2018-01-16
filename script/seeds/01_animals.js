exports.seed = function(knex, Promise){
  return knex("animals")
    .del()
    .then(function(){
      return knex("animals").insert([
        {
          id: 1,
          name: "Spotted Hyena",
          scientific_name: "Crocuta crocuta",
          image: "https://en.wikipedia.org/wiki/Spotted_hyena#/media/File:Crocuta_crocuta_Ngorongoro_Crater_(2015).jpg"
        },
        {
          id: 2,
          name: "Black Rhinoceros",
          scientific_name: "Diceros bicornis",
          image: "../../assets/black_rhinoceros.jpg"
        },
        {
          id: 3,
          name: "West Indian Manatee",
          scientific_name: "Trichechus manatus",
          image: "https://lazypenguins.com/wp-content/uploads/2016/03/Manatee.jpg"
        },
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE animals_id_seq RESTART WITH 4;")
    })
}
