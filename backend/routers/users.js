const router = require("express").Router();
const { getUser, updateUser, deleteUser } = require("../controllers/usersController");

// Get a User
router.get("/:id", getUser);

// Update User
router.put("/:id", updateUser);

// Delete User
router.delete("/:id", deleteUser);

module.exports = router;