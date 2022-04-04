import "./css/main.css";
import React from "react";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import styled from "styled-components";
import Balloon from "./components/Balloon/Balloon";

import messageList from "./messages.json";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import chatList from "./MOCK_DATA.json";

class App extends React.Component {
  state = {
    messages: messageList,
    chatList: chatList,

    valorInputUsuario: "",
    valorInputMensagem: "",
    inputSearch: "",
  };

  sendMessage = () => {
    const message = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };

    const messages = [...this.state.messages, message];
    this.setState({ messages: messages });

    this.clearInputs();
  };

  onEnterSendMessage = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.sendMessage();
    }
  };

  clearInputs = () => {
    this.setState({ valorInputUsuario: "" });
    this.setState({ valorInputMensagem: "" });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  onChangeInputSearch = (event) => {
    this.setState({ inputSearch: event.target.value });
  };

  render() {
    return (
      <div className="livechat">
        <div className="side">
          <div className="search-bar">
            <div className="search-input">
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input
                type="text"
                placeholder="Pesquisar"
                value={this.inputSearch}
                onChange={this.onChangeInputSearch}
              />
            </div>
          </div>
          <div className="chat-list">
            {this.state.chatList
              .filter((chat) => {
                return this.state.inputSearch === ""
                  ? true
                  : chat.name.includes(this.state.inputSearch);
              })
              .map((chat) => {
                return (
                  <div className="chat-item">
                    <img
                      className="status"
                      src={require("./images/sbt.png")}
                      alt={"SBT"}
                    ></img>
                    <div className="info">
                      <div className="title">
                        <h4 className="name">{chat.name}</h4>
                        <p className="last-seen">{chat.lastSeen}</p>
                      </div>
                      <div className="subtitle">
                        <p className="last-message">{chat.lastMessage}</p>
                        <div className="unread-message-count">
                          {chat.unread}
                        </div>
                      </div>
                    </div>
                    <p className="last"></p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="content">
          <header>
            <div className="chat-info">
              <img
                className="status"
                src={require("./images/sbt.png")}
                alt={"SBT"}
              ></img>
              <div className="info">
                <h4>SBT</h4>
                <p>last seen recently</p>
              </div>
            </div>
            <div className="tools">
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <button>
                <FontAwesomeIcon icon={faPhone} />
              </button>
              <button>
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
            </div>
          </header>
          <SimpleBar className="chat" data-simplebar-auto-hide="false">
            {this.state.messages.map((message, index) => {
              return <Balloon key={index} message={message} />;
            })}
          </SimpleBar>
          <div className="send-container">
            <input
              type={"text"}
              placeholder="Your name..."
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
            />
            <input
              type={"text"}
              placeholder="Your message..."
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              onKeyUp={this.onEnterSendMessage}
            />
            {/* <input type={"submit"} value="Send" onClick={this.sendMessage} /> */}
            <button>
              <FontAwesomeIcon icon={faMicrophone} />
            </button>
          </div>
        </div>

        {/* <SimpleBar className="chat-container">{messages}</SimpleBar>
        <div className="input-container">
          <Usuario
            type="text"
            placeholder="Usuário"
            className="user"
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
          />
          <Mensagem
            type="text"
            placeholder="Mensagem"
            className="message"
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            onKeyUp={this.onEnterSendMessage}
          />
          <SendButton onClick={this.sendMessage}>Send</SendButton>
        </div> */}
      </div>
    );
  }
}

export default App;
