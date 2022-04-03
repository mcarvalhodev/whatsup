import React from "react";

class Balloon extends React.Component {
  render() {
    const nome = this.props.message.usuario.toLowerCase();
    if (nome === "eu") {
      return (
        <div className="balloon">
          <p className="message">{this.props.message.mensagem}</p>
        </div>
      );
    } else {
      return (
        <div className="balloon">
          <p className="name">{this.props.message.usuario}</p>
          <p className="message">{this.props.message.mensagem}</p>
        </div>
      );
    }
  }
}

export default Balloon;
