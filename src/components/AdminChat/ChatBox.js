import React from "react";
import { Launcher } from "react-chat-window";
import { sendMsg } from "../../Sockets";

class ChatBox extends React.Component {
  onMessageWasSent = message => {
    sendMsg({
      ...message,
      author: this.props.user._id,
      user: this.props.box.user._id,
      role: "admin"
    });
    this.props.sendMessage({
      ...message,
      author: this.props.user._id,
      user: this.props.box.user._id
    });
  };

  render() {
    console.log(this.props.box);
    const messagesClone = JSON.parse(JSON.stringify(this.props.box.messages));
    const messages = messagesClone.map(msg => {
      msg.author = msg.author === this.props.user._id ? "me" : "them";
      return msg;
    });
    console.log(messages);
    return (
      <Launcher
        handleClick={this.props.closeChat}
        isOpen={this.props.isOpen}
        agentProfile={{
          teamName: this.props.box.user.username,
          imageUrl:
            "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
        }}
        onMessageWasSent={this.onMessageWasSent}
        messageList={messages}
        showEmoji
      />
    );
  }
}

export default ChatBox;
