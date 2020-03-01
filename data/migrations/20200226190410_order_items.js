exports.up = function(knex) {
    return knex.schema.createTable('order_items', tbl => {
        //Primary Key
        tbl.increments();

        // Strings
        tbl.string( 'payment_method' ).notNullable();

        // Integers
        tbl.integer( 'quantity' ).notNullable();

        // Foreign Keys
        tbl.integer( 'order_id' )
           .references( 'id' )
           .inTable( 'orders' )
           .onDelete( 'CASCADE' )
           .onUpdate( 'CASCADE' );

        tbl.integer( 'menu_item_id' )
           .references( 'id' )
           .inTable( 'menu_items' )
           .onDelete( 'CASCADE' )
           .onUpdate( 'CASCADE' );
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists( 'order_items' );
};