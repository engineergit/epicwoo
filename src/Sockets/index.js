import { baseUrl } from "../shared";
import socketIOClient from "socket.io-client";

export const events = {
  sendMsg: "SEND_MESSAGE",
  receiveMsg: "RECEIVE_MESSAGE",
};

let io = null;

export const authSocket = token => {
  io = socketIOClient(baseUrl);
  io.on("connect", () => {
    io.emit("authentication", token);
  });
};

export const userReceiveMsg = (cb) => {
  io.on(events.receiveMsg, cb);
};

export const sendMsg = message => {
  io.emit(events.sendMsg, message);
};
