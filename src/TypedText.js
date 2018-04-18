import React, { Component } from "react";
import styled from "styled-components";
import Typist from "react-typist";

const Text = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 18px;
  letter-spacing: -0.2;
`;

class TypedText extends Component {
  render() {
    return (
      <Text>
        <Typist>
          Lewis
          <Typist.Backspace count={5} delay={500} />
        </Typist>
      </Text>
    );
  }
}

export default TypedText;
