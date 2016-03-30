// CLEANED

var recipient = require('../datastore/seed-recipients')

exports.seed = function(knex, Promise) {
  var recipientPromises = []
  recipient.forEach(function (recipient) {
    recipientPromises.push(createRecipient(knex, recipient))
  })
  return Promise.all(recipientPromises)
}

function createRecipient (knex, recipient) {
  return knex.table('recipients')
    .insert(recipient)
}
