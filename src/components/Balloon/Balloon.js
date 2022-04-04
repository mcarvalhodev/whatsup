import React from "react";
import styled from "styled-components";

const BalaoMensagem = styled.div`
  max-width: 60%;
  word-wrap: break-word;
  padding: 0.3em 0.8em;
  border-radius: 0.3em;
  margin: 0.1em 5em;
  line-height: 1.3;
  font-weight: 450;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  background-color: ${(props) => {
    if (props.tipo === "eu") {
      return "#D9FDD3";
    } else {
      return "#ffffff";
    }
  }};

  align-self: ${(props) => {
    return props.tipo === "eu" ? "flex-end" : "flex-start";
  }};

  &:after {
    content: "";
    border: 15px solid transparent;
    border-top-color: black;
    position: absolute;
    top: 0px;

    border-top-color: ${(props) => {
      return props.tipo === "eu" ? "#D9FDD3" : "#fff";
    }};

    right: ${(props) => {
      if (props.tipo === "eu") {
        return "-8px";
      }
    }};
    left: ${(props) => {
      if (props.tipo === "outro") {
        return "-8px";
      }
    }};
  }
`;

class Balloon extends React.Component {
  render() {
    const nome = this.props.message.usuario.toLowerCase();
    return (
      <BalaoMensagem className="balloon" tipo={nome === "eu" ? "eu" : "outro"}>
        <p className="message">{this.props.message.mensagem}</p>
      </BalaoMensagem>
    );
  }
}

export default Balloon;
