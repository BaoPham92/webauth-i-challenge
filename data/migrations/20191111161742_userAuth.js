
exports.up = function (knex) {
    return knex.schema
        .createTable('users', (tbl) => {
            tbl.increments();

            // * KEY-VALUES
            tbl.string('username', 255).unique().notNullable();
            tbl.string('password', 255).notNullable();
            tbl.boolean('hashed').default(false);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
