const passport = require("passport");
const { db } = require("../db/index.js");

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log(user, "user Serial");
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        console.log(user);
        done(null, {
          username: user.username,
          id: user.id,
          name: user.name,
          password: user.password,
          profile_pic: user.profile_pic
        });
      })
      .catch(err => {
        done(err, null);
      });
  });
};
