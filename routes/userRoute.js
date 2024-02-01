const router = require("express").Router();

router.get("/users", (req, res) => {
  res.send("This is a User Route from Routes.......");
});

module.exports = router;
