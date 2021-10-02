import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import logo from "./media/7.png";
import ContactsIcon from "@mui/icons-material/Contacts";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

import { animateScroll as Scroll, Link } from "react-scroll";

const HeaderNav = ({bg}) => {
  const [toggle, setToggle] = useState(false)

  const onHandle = () => {
    const check = window.scrollY

    if(check>=80){
      setToggle(true)
    }
    else{
      setToggle(false)
    }
  }

  window.addEventListener("scroll", onHandle)

  return (
    <Container bg={toggle ? "bg":""}>
      <Wrapper>
        <Logo
          src={logo}
          onClick={() => {
            Scroll.scrollToTop();
          }}
        />
        <Navigation>
          <Nav to="home" smooth={true} offset={-100} duration={500}>
            <HomeIcon />
            <span>Home</span>
          </Nav>
          <Nav to="service" smooth={true} offset={-100} duration={500}>
            <HomeRepairServiceIcon />
            <span>Services</span>
          </Nav>
          <Nav to="video" smooth={true} offset={-100} duration={500}>
            <OndemandVideoIcon />
            <span>Video</span>
          </Nav>
          <Nav to="contact" smooth={true} offset={-100} duration={500}>
            <ContactsIcon />
            <span>Contact</span>
          </Nav>
        </Navigation>

        <Button
          onClick={() => {
            Scroll.scrollToBottom();
          }}
        >
          Goto Last
        </Button>
      </Wrapper>
    </Container>
  );
};

export default HeaderNav

const Button = styled.button`
  margin-right: 30px;
  width: 120px;
  height: 45px;
  outline: none;
  border: 0;
  color: black;
  border-radius: 3px;
  background-color: white;
  transform: scale(1);
  transition: all 400ms;
  font-weight: bold;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    border: 2px solid white;
    background-color: transparent;
    color: white;
  }
`;

const Nav = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 10px;
  color: white;

  .MuiSvgIcon-root {
    font-size: 20px;
    margin-right: 5px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 400ms;
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;

    :after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: white;
      opacity: 0;
      transition: all 400ms;
      transform: scale(0);
      transform-origin: center;
    }
  }

  :hover {
    cursor: pointer;

    .MuiSvgIcon-root {
      color: rgba(255, 255, 255, 1);
    }

    span {
      :after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({bg}) => (
    bg ? "#011834":"transparent"
  )};
  color: white;
  font-family: Poppins;
  position: fixed;
  z-index: 99;

`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  cursor: pointer;
  width: 160px;
  height: 50px;
  object-fit: contain;
  margin: 0 30px;
`;
const Navigation = styled.div`
  display: flex;
  flex: 1;
`;
