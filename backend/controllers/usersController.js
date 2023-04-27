// GET A USER
const getUser = function (req, res) {
  res.send("Get a User");
}

// UPDATE USER
const updateUser = function (req, res) {
  res.send("Update a User");
}

// DELETE USER
const deleteUser = function (req, res) {
  res.send("Delete a User");
}

module.exports = {
  getUser,
  updateUser,
  deleteUser,
}