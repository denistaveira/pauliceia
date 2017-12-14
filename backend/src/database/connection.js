const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile.js')[environment]

module.exports = require('knex')(config)

/*
 * How to work with knex:
 *
 * ```
 * knex migrate:rollback
 * knex migrate:make <migration_name>
 * knex migrate:latest --env development
 * knex seed:make <table>_seed
 * knex seed:run --env development
 * ```
 */
