const passport = require("passport");
const { db } = require("../db/index.js");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((email, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        done(null, {
          id: user.id,
          name: user.name,
          username: user.username,
          password: user.password,
          profile_pic: user.profile_pic
        });
      })
      .catch(err => {
        done(err, null);
      });
  });
};
