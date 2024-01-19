/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    bio VARCHAR(400),
    username VARCHAR(200) NOT NULL
    );
    `);
};

exports.down = pgm => {
    pg.sql(` 
    DROP TABLE users;`
    );
};
