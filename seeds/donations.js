// CLEANED

var donation = require('../datastore/seed-donations')

exports.seed = function(knex, Promise) {
  var donationPromises = []
  donation.forEach(function (donation) {
    donationPromises.push(createDonation(knex, donation))
  })
  return Promise.all(donationPromises)
}

function createDonation (knex, donation) {
  return knex.table('donations')
    .insert(donation)
}
