import styled from "styled-components";

const StyledH1 = styled.h1`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: 5vh;
  padding: 4vh 4vw 0 4vw;

  color: white;
  @media (max-width: 768px) {
    padding-top: 15%;
  }
`;

export default StyledH1;
