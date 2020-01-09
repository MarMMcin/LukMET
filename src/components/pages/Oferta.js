import React, { Component } from "react";
import styled from "styled-components";
import StyledH1 from "../StylesComponents";
import Drut from "../../images/drut1.png";

const Img = styled.img`
  width: 25vw;
  box-shadow: 0 10px 6px -6px #777;
  border-radius: 2px;
  @media (max-height: 800px) {
    width: 20vw;
  }
  @media (max-width: 768px) {
    width: 220px;
  }
`;
const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-size: 2vh;
  padding-left: 20vw;
  padding-right: 20vw;
  text-align: center;
  color: #edf0f1;
  @media (max-width: 768px) {
    padding-left: 8vw;
    padding-right: 8vw;
  }
  @media (max-height: 800px) {
    padding-left: 20%;
    padding-right: 20%;
  }
`;

class Oferta extends Component {
  render() {
    return (
      <>
        <StyledH1>Oferta</StyledH1>
        <StyledH2>
          W ofercie dostępne są pręty do podwieszania profili konstrukcji
          nośnych sufitów podwieszanych w rozmiarach od 20cm do 4m
        </StyledH2>
        <Container>
          <Img src={Drut} alt="" />
        </Container>
        <StyledH2>
          Nasza oferta jest indywidualna. Bardzo prosimy o kontakt w celu
          ustalenia szczegółów. Możliwy jest także dowóz wyrobów w wyznaczone
          miejsce.
        </StyledH2>
      </>
    );
  }
}

export default Oferta;
