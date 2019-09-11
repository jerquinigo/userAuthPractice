var express = require("express");
var router = express.Router();
const { createUser } = require("../db/queries/usersQueries.js");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/signUp", createUser);

module.exports = router;
