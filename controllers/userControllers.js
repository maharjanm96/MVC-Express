const apiData = require("../data/users");
const getAllUsers = async (req, res) => {
  const data = await apiData();
  res.send(data);
};

const getSingleUser = async (req, res) => {
  const { userID } = req.params;
  try {
    const { users } = await apiData();
    const user = users.find((user) => user.id === Number(userID));
    if (!user) return res.satus(401).json({ message: "User not found." });
    if (user) return res.status(200).json(user);
  } catch (err) {
    res.satus(500).json({ message: "Something Went Wrong.", error: err });
  }
};

module.exports = { getAllUsers, getSingleUser };
