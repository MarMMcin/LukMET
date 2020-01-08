import React from "react";

import styled from "styled-components";

const StyledH1 = styled.h1`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: 5vh;
  padding: 3vh 3vw 0 3vw;

  color: white;

  @media (max-width: 768px) {
    padding-top: 15%;
    flex-direction: column;
  }
`;

const StyledH2 = styled.h2`
  margin: 3vw 20vw 0 20vw;
  text-align: center;
  color: #edf0f1;

  @media (max-width: 768px) {
    font-size: 1em;
    margin: 3vw 12vw 0 12vw;
  }
`;

const StyledTittle = styled.div`
  @media (max-width: 768px) {
    padding-top: 2vh;
    text-align: center;
    font-size: 5vh;
  }
`;
const StyledSpan = styled.span`
  color: #ec7801;
  display: inline;
`;

const StyledP = styled.p`
  text-align: center;
  font-weight: 700;
  padding-top: 2vh;
`;
const OFirmie = () => {
  return (
    <>
      <StyledTittle>
        <StyledH1>
          ŁUKASZ DRELISZEK&nbsp;
          <StyledSpan>LUKMET</StyledSpan>{" "}
        </StyledH1>
      </StyledTittle>
      <StyledH2>
        Firma <StyledSpan>LUKMET</StyledSpan> została założona w 2013 roku.
        Specializuje się w produkcji wyrobów z drutu. Współparcuje z wieloma
        firamamy z całej Polski. Firmę cechuję techniczna dokładność
        przekładająca się na wysoką jakość wykonywanych produktów.{" "}
        <StyledSpan>LUKMET</StyledSpan> za cel obrał sobie spełnianie oczekiwań
        nawet najbardziej wymagających klientów i dostarczanie im produktów
        najwyżej jakości w dobrej cenie. Firma posiada Certyfikaty wyrabianych
        przez siebie produktów.
        <StyledP>Zapraszamy do zapoznania się z oferta firmy.</StyledP>
      </StyledH2>
    </>
  );
};

export default OFirmie;
