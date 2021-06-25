const { Client } = require("pg");

const db = new Client({ connectionString: "postgresql:///shout_it_out" });

db.connect();

module.exports = db;
