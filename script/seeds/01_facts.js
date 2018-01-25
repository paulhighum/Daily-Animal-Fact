exports.seed = function(knex, Promise){
  return knex("facts")
    .del()
    .then(function(){
      return knex("facts").insert([
        {
          id: 1,
          fact: "The african bush elephant is the largest extant terrestrial animal. The largest specimen on record stood 13ft tall at the shoulder and weighed over 22,000lbs",
          animal_id: 50
        },{
          id: 2,
          fact: "The african bush elephant, along with the other species of its genus, has the longest gestation period of any mammal, which lasts an average of about 22 months",
          animal_id: 50
        },{
          id: 3,
          fact: "The kri-kri, found only on the Grecian Islands of Crete, Dia, Thodorou, and Agii Pantes, is not actually a sub-species of wildgoat, but is instead a feral domestic goat. It's ancestors were originally domesticated around the Eastern Mediterranean about 10,000 years ago",
          animal_id: 49
        },{
          id: 4,
          fact: "The chamois is a species of goat-antelope native to the mountains of Europe. In 1907 chamois were sent to New Zealand by Austrian Emperor, Franz Joseph I as a gift and have since gradually spread throughout much of the South Island",
          animal_id: 48
        },

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE facts_id_seq RESTART WITH 51;")
    })
}
