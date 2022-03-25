import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    messages: [],

    valorInputUsuario: "",
    valorInputMensagem: "",
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

  render() {
    const messages = this.state.messages.map((msg) => {
      return (
        <p>
          <span>{msg.usuario}</span>: {msg.mensagem}
        </p>
      );
    });

    return (
      <div className="root">
        <div className="container">
          <div className="chat-container">{messages}</div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Usuário"
              className="user"
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
            ></input>
            <input
              type="text"
              placeholder="Mensagem"
              className="message"
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
            ></input>
            <button onClick={this.sendMessage}>Enviar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
