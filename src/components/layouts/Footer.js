import React, { Component } from "react";
import styled from "styled-components";

const StyledA = styled.a`
  color: #edf0f1;
  margin: 4px;
  &:hover {
    color: rgba(249, 212, 125, 1);
  }
  &:nth-child(2):hover {
    color: #2867b2;
  }
`;
const Container = styled.div`
  position: fixed;
  bottom: 0;
  padding-bottom: 20px;
  width: 100vw;
  background-color: #222222;
  height: 4vh;
`;
const StyledFooter = styled.p`
  display: block;
  position: absolute;
  font-size: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #edf0f1;
  @media (max-width: 768px) {
    font-size: 8px;
  }
  @media (max-width: 320px) {
    font-size: 5px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Container>
        <StyledFooter>
          © 2020 LUKMET | by: MM{" "}
          <StyledA
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MarMMcin/marcin.magdon"
          >
            <i className="fab fa-github"></i>
          </StyledA>
          <StyledA
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/marcin-magdoń-255707193/"
          ></StyledA>
        </StyledFooter>
      </Container>
    );
  }
}

export default Footer;
