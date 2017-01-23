
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
    .then(function(){
      const users = [{
          id: 1,
          email: "whoAreYouTalkingTo@aol.com",
          password: "Isuck!"
      }, {
          id: 2,
          email: "WhereTheMammalsAt@yahoo.com",
          password: "Meerkats"
      }];
      return knex('user').insert(users);
    });
};
