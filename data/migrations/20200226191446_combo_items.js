exports.up = function(knex) {
    return knex.schema.createTable('combo_items', tbl => {
        //Primary Key
        tbl.increments();

        // Foreign Keys
        tbl.integer( 'combo_id' )
           .references( 'id' )
           .inTable( 'combos' )
           .onDelete( 'CASCADE' )
           .onUpdate( 'CASCADE' );
        
        tbl.integer( 'menu_item_id' )
           .references( 'id' )
           .inTable( 'menu_items' )
           .onDelete( 'CASCADE' )
           .onUpdate( 'CASCADE' );
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists( 'combo_items' );
};