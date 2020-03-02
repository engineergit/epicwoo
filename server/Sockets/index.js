const socketIo = require("socket.io");
const socketAuth = require("socketio-auth");
const authenticate = require("./authenticate");
const postAuthenticate = require("./postAuthenticate");

const sockets = server => {
  const io = socketIo(server);
  socketAuth(io, {
    authenticate: authenticate,
    postAuthenticate: postAuthenticate
  });
};

module.exports = sockets;
