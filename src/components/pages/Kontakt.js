import React from "react";

import styled from "styled-components";
import StyledH1 from "../StylesComponents";
const Container = styled.div``;
const StyledDiv = styled.div`
  padding-top: 3vh;
  align-content: center;
  color: #ec7801;
`;
const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: 38px;
  padding: 30px;
  transition: 0.3s ease;
  @media (max-height: 800px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
const StyledP = styled.p`
  color: white;
  text-align: center;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-height: 800px) {
    font-size: 12px;
    padding: 10px;
  }
`;

const IconDiv = styled.div`
  color: #ec7801;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
  }
  @media (max-width: 768px) {
    font-size: 70px;
  }
`;

const StyledA = styled.a`
  color: white;
  text-decoration: none;
`;

const Kontakt = () => {
  return (
    <>
      <Container>
        <StyledH1>Kontakt</StyledH1>
        <StyledDiv>
          <ContactDiv>
            {" "}
            <StyledA href="tel:510216979">
              <IconDiv>
                <i className="fas fa-mobile-alt"></i>{" "}
              </IconDiv>
            </StyledA>
            <StyledA href="tel:510216979">
              <StyledP>510 216 979</StyledP>{" "}
            </StyledA>
          </ContactDiv>
          <ContactDiv>
            {" "}
            <StyledA href="mailto:lukasz.dreliszek@onet.pl">
              <IconDiv>
                <i className="far fa-envelope"></i>{" "}
              </IconDiv>{" "}
            </StyledA>
            <StyledP>
              {" "}
              <StyledA href="mailto:lukasz.dreliszek@onet.pl">
                lukasz.dreliszek@onet.pl
              </StyledA>
            </StyledP>
          </ContactDiv>
          <ContactDiv>
            <StyledA
              href="https://www.google.pl/maps/place/Nadrzeczna+6A,+42-360+Jastrząb/@50.6693174,19.1995145,103m/data=!3m1!1e3!4m5!3m4!1s0x47173382e8538463:0xd56e725472bd6141!8m2!3d50.669384!4d19.1999919"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconDiv>
                <i className="fas fa-map-marker-alt"></i>
              </IconDiv>{" "}
            </StyledA>
            <StyledP>
              Jastrząb <br /> ul.Nadrzeczna 6a <br />
              42-360 Poraj
            </StyledP>
          </ContactDiv>
        </StyledDiv>
      </Container>
    </>
  );
};

export default Kontakt;
