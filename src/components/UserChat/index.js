import React from "react";
import { Launcher } from "react-chat-window";
import { baseUrl } from "../../shared";
import { authSocket, userReceiveMsg, sendMsg } from "../../Sockets";

class UserChat extends React.Component {
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }
  componentDidMount() {
    authSocket(this.props.token);
    userReceiveMsg(msg => {
      msg.author = "them";
      this.setState(st => ({ messageList: [...st.messageList, msg] }));
    });
    fetch(baseUrl + "messages/" + this.props.user._id)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        const err = new Error(res.status + " : " + res.statusText);
        throw err;
      })
      .then(res => {
        const messages = res.messages.map(msg => {
          msg.author = msg.author === this.props.user._id ? "me" : "them";
          return msg;
        });
        this.setState({ messageList: messages });
      })
      .catch(err => alert(err.message));
  }
  onMessageWasSent = message => {
    this.setState(
      {
        messageList: [...this.state.messageList, message]
      },
      () => {
        sendMsg({
          ...message,
          author: this.props.user._id,
          user: this.props.user._id,
          role: "user"
        });
      }
    );
  };
  render() {
    return (
      <Launcher
        onFileSelected={fileList => console.log(fileList)}
        agentProfile={{
          teamName: this.props.user.username,
          imageUrl:
            "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
        }}
        onMessageWasSent={this.onMessageWasSent}
        messageList={this.state.messageList}
        showEmoji
      />
    );
  }
}

export default UserChat;
