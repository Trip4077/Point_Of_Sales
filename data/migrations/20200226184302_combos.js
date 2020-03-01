exports.up = function(knex) {
    return knex.schema.createTable('combos', tbl => {
        //Primary Key
        tbl.increments();

        // Strings
        tbl.string( 'size' ).notNullable().unique();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists( 'combos' );
};