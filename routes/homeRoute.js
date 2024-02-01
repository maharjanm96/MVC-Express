const router = require("express").Router();

router.get("/home", (req, res) => {
  res.send("This is  a Home Page from Routes......");
});

module.exports = router;
