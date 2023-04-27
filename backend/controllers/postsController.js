// CREATE A POST
const createPost = function (req, res) {
  res.send("Create a Post");
}

// GET ALL POSTS
const getAllPosts = function (req, res) {
  res.send("Get All Posts");
}

// GET A POST
const getPost = function (req, res) {
  res.send("Get a Post");
}

// UPDATE POST
const updatePost = function (req, res) {
  res.send("Update a Post");
}

// DELETE POST
const deletePost = function (req, res) {
  res.send("Delete a Post");
}

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
}