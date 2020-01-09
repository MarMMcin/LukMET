import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  font-size: 10vw;
  text-align: center;
  color: white;
`;
const ErrorPage = () => {
  return (
    <div>
      <StyledP>Nie ma takiej strony 404</StyledP>
    </div>
  );
};

export default ErrorPage;
