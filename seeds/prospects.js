const prospects = require("../prospect_info.js");

exports.seed = function (knex) {
  return knex("prospects")
    .del()
    .then(function () {
      return knex("prospects").insert(prospects);
    });
};
