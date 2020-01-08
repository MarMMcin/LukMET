import React, { Component } from "react";

import styled from "styled-components";
import StyledH1 from "../StylesComponents";
import Certyfikat from "../../images/certyfikat.jpg";

const Photo = styled.img`
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 15px 5px;
  @media (max-width: 768px) {
    width: 200px;
  }
`;
const StyledP = styled.p`
  color: white;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    padding-left: 12%;
    padding-right: 12%;
    padding-bottom: 15%;
  }
  @media (max-width: 768px) {
    padding-top: 5%;
    padding-bottom: 10%;
  }
`;

class Certyfikaty extends Component {
  render() {
    return (
      <>
        <StyledH1>Certyfikaty</StyledH1>

        <Container>
          <Photo src={Certyfikat} alt="certyfikat" />
          <StyledP>Certyfikat wyrobu drutu prostego DP-4</StyledP>
        </Container>
      </>
    );
  }
}

export default Certyfikaty;
