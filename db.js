const { Pool } = require("pg");

//Setting up connection with database
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "reactPrac",
  password: "9877",
  port: 5432,
});

module.exports = pool;
