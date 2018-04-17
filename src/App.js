import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import TypedText from "./TypedText";

function cursorAnim() {
  const animation = keyframes`
    50% {
      border-color: transparent;
    }
  `;
  return animation;
}

const Cursor = styled.span`
  border-right: 0.5em solid;
  animation: ${cursorAnim()} 1s steps(1) infinite;
`;

class App extends Component {
  render() {
    return (
      <div>
        <TypedText />
        <Cursor />
      </div>
    );
  }
}

export default App;
