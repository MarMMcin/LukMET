import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../../images/prety.jpg";

const list = [
  { name: "O firmie", path: "/", exact: true },
  { name: "Certyfikaty", path: "/certyfikaty" },
  { name: "Oferta", path: "/oferta" },
  { name: "Kontakt", path: "/kontakt" }
];
const LogoDown = styled.p`
  font-size: 20px;
`;
const LogoAll = styled.div`
  background-image: url(${LogoImg});
  background-size: cover;

  height: 12vh;
`;
const ColorLetter = styled.span`
  color: #ec7801;
`;

const Logo = styled.div`
  width: 72vw;
  height: 12vh;
  position: fixed;
  top: 0;
  padding: 20px;
  color: white;
  font-size: 40px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const StyledLi = styled.li`
  text-align: center;
  height: 12vh;
  background-color: rgba(0, 0, 0, 0.7);
  padding-top: 5vh;
  font-size: 1vw;
  width: 7vw;
  list-style-type: none;

  a {
    text-decoration: none;
    color: #edf0f1;
  }

  a:hover {
    color: #ec7801;
  }
`;

const StyledNavi = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;
const Navigation = () => {
  const menu = list.map(item => (
    <StyledLi className="li" key={item.name}>
      <NavLink
        to={item.path}
        exact={item.exact ? item.exact : false}
        activeClassName="active"
        activeStyle={{
          color: "#ec7801"
        }}
      >
        {item.name}
      </NavLink>
    </StyledLi>
  ));
  return (
    <>
      <LogoAll>
        <StyledNavi>{menu}</StyledNavi>

        <Logo>
          LUK<ColorLetter>MET</ColorLetter>{" "}
          <LogoDown>
            <ColorLetter>Ł</ColorLetter>ukasz <ColorLetter>D</ColorLetter>
            reliszek
          </LogoDown>
        </Logo>
      </LogoAll>
    </>
  );
};

export default withRouter(Navigation);
