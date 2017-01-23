
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mammalian', function(table){
    table.increments();
    table.string('name');
    table.integer('number_of_legs');
    table.string('habitat');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('mammalian');
};
