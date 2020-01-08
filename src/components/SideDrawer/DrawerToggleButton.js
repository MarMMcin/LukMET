import React from "react";

import styled from "styled-components";

const ToggleButton = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  padding: 0;
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  z-index: 100;
  &:hover {
    background-color: transparent;
  }
`;
const IconBurger = styled.div`
  color: #ec7801;
  font-size: 28px;
`;
const drawerToogleButton = props => (
  <ToggleButton onClick={props.click}>
    <IconBurger>
      <i className="fas fa-bars"></i>
    </IconBurger>
  </ToggleButton>
);

export default drawerToogleButton;
