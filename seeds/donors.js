// CLEANED

var donor = require('../datastore/seed-donors')

exports.seed = function(knex, Promise) {
  var donorPromises = []
  donor.forEach(function (donor) {
    donorPromises.push(createDonor(knex, donor))
  })
  return Promise.all(donorPromises)
}

function createDonor (knex, donor) {
  return knex.table('donors')
    .insert(donor)
}
