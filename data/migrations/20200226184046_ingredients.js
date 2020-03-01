exports.up = function(knex) {
  return knex.schema.createTable('ingredients', tbl => {
    //Primary Key
    tbl.increments();

    // Strings
    tbl.string( 'name' ).notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'ingredients' );
};