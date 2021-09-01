import React, { Component } from "react";
import { Container, Wrapper, Body } from "./styles";
import Sidebar from "./sidebar/Sidebar";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Sidebar />
          <Body />
        </Wrapper>
      </Container>
    );
  }
}
