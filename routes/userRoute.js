const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
} = require("../controllers/userControllers");

router.get("/users", getAllUsers);
router.get("/users/:userID", getSingleUser);

module.exports = router;
