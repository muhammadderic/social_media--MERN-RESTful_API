const router = require("express").Router();
const { createPost, getAllPosts, getPost, updatePost, deletePost } = require("../controllers/postsController");

// Create a Post
router.post("/", createPost);

// Get All Post
router.get("/all", getAllPosts);

// Get a Post
router.get("/:id", getPost);

// Update Post
router.put("/:id", updatePost);

// Delete a Post
router.delete("/:id", deletePost);

module.exports = router;