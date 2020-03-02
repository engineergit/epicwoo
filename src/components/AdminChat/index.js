import React from "react";
import { Table } from "antd";
import { baseUrl } from "../../shared";
import ChatBox from "./ChatBox";
import { authSocket, userReceiveMsg } from "../../Sockets";
import { connect } from "react-redux";
import  "antd/dist/antd.css";
class AdminChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      selectedBox: null,
      isChatBoxOpen: false
    };
  }
  componentDidMount() {
    authSocket(localStorage.getItem("token"));
    userReceiveMsg(msg => {
      if (msg.isBox) {
        this.setState(st => ({ messages: [msg, ...st.messages] }));
      } else {
        const messages = this.state.messages.map(box => {
          if (box.user._id === msg.user) {
            box.messages.push(msg);
          }
          return box;
        });
        this.setState({ messages });
      }
    });
    fetch(baseUrl + "messages/")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        const err = new Error(res.status + " : " + res.statusText);
        throw err;
      })
      .then(res => {
        console.log("messages", res);
        this.setState({ messages: res.messages });
      })
      .catch(err => alert(err.message));
  }

  sendMessage = msg => {
    const messages = this.state.messages.map(box => {
      if (box.user._id === msg.user) {
        box.messages.push(msg);
      }
      return box;
    });
    this.setState({ messages });
  };

  columns = [
    {
      title: "Name",
      key: "name",
      render: box => box.user.username
    },
    {
      title: "Messages",
      key: "messages",
      render: box => box.messages.length
    }
  ];

  rowClickHandler = box => {
    this.setState({ selectedBox: box, isChatBoxOpen: true });
  };
  closeChat = () => this.setState({ isChatBoxOpen: false });
  render() {
    console.log(this.props);
    return (
      <div style={{marginTop:"50px"}}>
        <Table
          rowKey={item => item._id}
          onRowClick={this.rowClickHandler}
          pagination={false}
          dataSource={this.state.messages}
          columns={this.columns}
        />
        {this.state.isChatBoxOpen && (
          <ChatBox
            sendMessage={this.sendMessage}
            user={this.props.Authentication.user}
            closeChat={this.closeChat}
            isOpen={this.state.isChatBoxOpen}
            box={this.state.selectedBox}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (store)=>({
  Authentication:store.Authentication
})

export default connect(mapStateToProps)(AdminChat);
