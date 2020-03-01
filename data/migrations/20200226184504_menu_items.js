exports.up = function(knex) {
  return knex.schema.createTable('menu_items', tbl => {
    //Primary Key
    tbl.increments();

    // Strings
    tbl.string( 'name' ).notNullable();
    
    // Floats
    tbl.float(' price ').notNullable();

    // Foreign Keys
    tbl.integer( 'menu_id' )
       .references( 'id' )
       .inTable( 'menus' )
       .onDelete( 'CASCADE' )
       .onUpdate( 'CASCADE' );
 
    tbl.integer( 'category_id' )
       .references( 'id' )
       .inTable( 'category' )
       .onDelete( 'CASCADE' )
       .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'menu_items' );
};
