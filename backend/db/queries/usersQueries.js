const { db } = require("../index.js");
const authHelpers = require("../../auth/helpers");

createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);
  db.one(
    "INSERT INTO users(name,username,password,profile_pic) VALUES(${name},${username},${password},${profile_pic})RETURNING name",
    {
      name: req.body.name,
      username: req.body.username,
      password: hash,
      profile_pic: req.body.profile_pic || null
    }
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "you have added a user"
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

module.exports = {
  createUser
};
