module.exports =  {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    url: process.env.DATABASE_URL,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    user:     process.env.DBUSER,
    password: process.env.DBPASSWORD
  },
  seeds: {
    directory: './seeds'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
