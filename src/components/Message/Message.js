import React from "react";
import styled from "styled-components";

import doublecheck from "../../images/doublecheck.svg";

const BalaoMensagem = styled.div`
  max-width: 60%;
  word-wrap: break-word;
  padding: 0.3em 0.8em;
  border-radius: 0.5em;
  margin: 0.2em 0;
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

const Nome = styled.div`
  color: #9aac8c;
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 0.2em;
`;

const DoubleCheck = styled.img`
  position: absolute;
  right: 4px;
  height: 0.5em;
  bottom: 4px;
`;

class Message extends React.Component {
  state = {};

  render() {
    const nome = this.props.nome.toLowerCase();
    if (nome === "eu") {
      return (
        <BalaoMensagem tipo={"eu"} key={this.props.index}>
          {this.props.conteudo} 
          <DoubleCheck src={doublecheck} />
        </BalaoMensagem>
      );
    } else {
      return (
        <BalaoMensagem tipo={"outro"} key={this.props.index}>
          <Nome>{this.props.nome}</Nome>
          <div>{this.props.conteudo}</div>
        </BalaoMensagem>
      );
    }
  }
}

export default Message;
