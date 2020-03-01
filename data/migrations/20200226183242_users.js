exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    //Primary Key
    tbl.increments();

    // Strings
    tbl.string( 'email' ).notNullable().unique();
    tbl.string( 'full_name' ).notNullable();

    // Booleans
    tbl.boolean( 'isAdmin' ).notNullable().defaultTo( false );

    // Timestamp
    tbl.date( 'created_at' ).defaultTo( Date.now() );
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'users' );
};
