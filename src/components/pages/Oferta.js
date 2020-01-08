import React, { Component } from "react";
import styled from "styled-components";
import StyledH1 from "../StylesComponents";
import Drut from "../../images/drut1.png";

const Img = styled.img`
  box-shadow: 0 0 15px 5px;
  width: 300px;
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
  padding-left: 30vw;
  padding-right: 30vw;
  text-align: center;
  color: #edf0f1;
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
          Nasza oferta jest indywidualna dla każdego kilenta, bardzo prosimy o
          kontakt w celu ustalenia szczegółów. Możliwy jest także dowóz wyrobów
          w wyznaczone miejsce.
        </StyledH2>
      </>
    );
  }
}

export default Oferta;
