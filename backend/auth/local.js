const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");
const { db } = require("../db/index.js");
const options = { usernameField: "username", passwordField: "password" };

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    console.log(password);
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, {
            name: user.name,
            username: user.username
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
