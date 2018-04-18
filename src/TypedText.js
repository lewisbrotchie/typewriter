import React, { Component } from "react";
import styled from "styled-components";

const Text = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 14px;
  letter-spacing: -0.2;
`;

class TypedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentString: ""
    };
  }

  render() {
    return <Text>Hello you, this text has the typed effect</Text>;
  }
}

export default TypedText;
