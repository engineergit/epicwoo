const jwt = require("jsonwebtoken");
const config = require("../config");

const authenticate = (socket, token, cb) => {
  jwt.verify(token, config.secret, (err, user) => {
    if (err) return cb(err, false);
    cb(null,true);
  });
};

module.exports = authenticate;