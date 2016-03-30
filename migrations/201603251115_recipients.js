exports.up = function(knex, Promise) {
  // console.log('up')
  return knex.schema.createTableIfNotExists('recipients', function (table) {
    console.log('creating table: recipients')
    table.varchar('recipientID').primary()
    table.string('name')
    table.string('imgURL')
    table.integer('received')
    table.integer('target')
    table.string('sobStory', 2000)
    table.integer('rating')
    table.varchar('donorID')
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    })
    .then(function (){
      return knex.schema.createTableIfNotExists('donors', function (table) {
        console.log('creating table: donors')
        table.varchar('donorID').primary()
        table.string('donorName')
        table.string('passwordHash')
        table.string('email')
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        })
    })
    .then(function (){
      return knex.schema.createTableIfNotExists('donations', function (table) {
        console.log('creating table: donations')
        table.varchar('donationID').primary()
        table.varchar('donorID')
        table.varchar('recipientID')
        table.integer('amount')
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        })
    })
    .then(function (){
      return knex.schema.createTableIfNotExists('ratings', function (table) {
        console.log('creating table: ratings')
        table.varchar('ratingID').primary()
        table.varchar('donorID')
        table.varchar('recipientID')
        table.integer('rating')
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        })
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipients')
    .then(function (){
      return knex.schema.dropTableIfExists('donors')
    })
    .then(function (){
      return knex.schema.dropTableIfExists('donations')
    })
    .then(function (){
      return knex.schema.dropTableIfExists('ratigs')
    })
    .then(function () {
        process.exit()
    })

}
