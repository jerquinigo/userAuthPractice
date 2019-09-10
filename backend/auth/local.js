const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");
const { db } = require("../db/index.js");
const options = { usernameField: "username", passwordField: "password" };

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, {
            email: user.email,
            id: user.id,
            address_field: user.address_field,
            name: user.name,
            type: user.type
          });
        }
      })
      .catch(err => {
        console.log("500 ERROR??", err);
        return done(err);
      });
  })
);

init();

module.exports = passport;
