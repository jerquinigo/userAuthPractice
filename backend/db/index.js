const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/user_auth_practice");

module.exports = { db };
