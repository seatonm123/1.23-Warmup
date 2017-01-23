
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "mammalian"; ALTER SEQUENCE mammalian_id_seq RESTART WITH 6')
    .then(function(){
      const mammalians = [{
        id: 1,
        name: "D'jango",
        number_of_legs: 7,
        habitat: "sewer",
        user_id: 1
      }, {
        id: 2,
        name: "Sparky",
        number_of_legs: 4,
        habitat: "rolling hills",
        user_id: 1
      }, {
        id: 3,
        name: "Salmonella",
        number_of_legs: 0,
        habitat: "desert",
        user_id: 1
      }, {
        id: 4,
        name: "Cowboy",
        number_of_legs: 2,
        habitat: "outback",
        user_id: 2
      }, {
        id: 5,
        name: "Karl Marx",
        number_of_legs: 1,
        habitat: "kremlin",
        user_id: 2
      }];
      return knex('mammalian').insert(mammalians);
    });
};
