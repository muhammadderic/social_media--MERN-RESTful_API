// REGISTER
const register = function (req, res) {
  res.send("Register");
}

// LOGIN
const login = function (req, res) {
  res.send("Login");
}

module.exports = {
  register,
  login,
}