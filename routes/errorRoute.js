const router = require("express").Router();

router.get("*", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("Url doesn't exists.");
});

module.exports = router;
