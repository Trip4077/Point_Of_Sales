exports.up = function(knex) {
    return knex.schema.createTable('orders', tbl => {
        //Primary Key
        tbl.increments();

        // Strings
        tbl.string( 'payment_method' ).notNullable();

        // Floats
        tbl.float( 'total' );

        // TimeStamp
        tbl.date( 'created_at' ).defaultTo( Date.now() );

        // Foreign Keys
        tbl.integer( 'order_taker' )
           .references( 'id' )
           .inTable( 'users' );
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists( 'orders' );
};
