const router = require("express").Router();
const { registerUser, loginUser } = require("../controllers/userAuth");
const {
  getAllUsers,
  // getSingleUser,
} = require("../controllers/userControllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);
// router.get("/users/:userID", getSingleUser);

module.exports = router;
