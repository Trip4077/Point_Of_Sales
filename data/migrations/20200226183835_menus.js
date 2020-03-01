exports.up = function(knex) {
  return knex.schema.createTable('menus', tbl => {
    //Primary Key
    tbl.increments();

    // Strings
    tbl.string( 'name' ).notNullable().unique();
  })
};
  
exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'menus' );
};