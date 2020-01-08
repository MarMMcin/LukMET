import React from "react";

import styled from "styled-components";
import StyledH1 from "../StylesComponents";

const StyledH2 = styled.h2`
  margin: 3vw 20vw 0 20vw;
  text-align: left;
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

const OFirmie = () => {
  return (
    <>
      <StyledTittle>
        <StyledH1>ŁUKASZ DRELISZEK LukMET</StyledH1>
      </StyledTittle>
      <StyledH2>
        Firma od 2013 roku zajmuję się profesionalną produkcją drutów, spreżyn
        posiada certyfikaty ISO.
      </StyledH2>
    </>
  );
};

export default OFirmie;
