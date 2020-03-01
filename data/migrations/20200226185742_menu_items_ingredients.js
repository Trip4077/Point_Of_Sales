exports.up = function(knex) {
    return knex.schema.createTable('menu_item_ingredients', tbl => {
        //Primary Key
        tbl.increments();

        // Foreign Keys
        tbl.integer( 'menu_id' )
           .references( 'id' )
           .inTable( 'menus' )
           .onDelete( 'CASCADE' )
           .onUpdate( 'CASCADE' )

        tbl.integer( 'ingredient_id' )
           .references( 'id' )
           .inTable( 'ingredients' )
           .onDelete( 'CASCADE' )
           .onUpdate( 'CASCADE' );
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists( 'menu_item_ingredients' );
};
