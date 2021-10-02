import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
// import logo from "./media/7.png";
import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterSection = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Title>Community</Title>
          <Sub>
            <List>Blog</List>
            <List>Github</List>
            <List>Youtube</List>
          </Sub>
        </Section>
        <Section>
          <Title>Service</Title>
          <Sub>
            <List>Web Development</List>
            <List>UI/UX Design</List>
            <List>Frontend Development</List>
            <List>Backend Development</List>
          </Sub>
        </Section>
        <Section>
          <Title>Social</Title>
          <Sub>
            <List>
              <LinkT tw>
              <TwitterIcon />
              </LinkT>
            </List>
            <List>
              <LinkF fb>
                <FacebookIcon />
              </LinkF>
            </List>
            <List>
              <LinkY yb><YouTubeIcon /></LinkY>
            </List>
            <List>
              <LinkI inst><InstagramIcon /></LinkI>
            </List>
          </Sub>
        </Section>
      </Wrapper>

      <Last>
        <Text><CopyrightIcon /> 2021 Elijah C.</Text> 
      </Last>
    </Container>
  );
};

export default FooterSection;

const Text = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content : center;
margin: 0 5px;

.MuiSvgIcon-root {
  margin: 0 5px;
}
`;

const Last = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
 align-items:center;
  margin-bottom: 20px;
  
`;
const Title = styled.div`
  margin-left: 30px;
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Sub = styled.div`
`;

const LinkT = styled.a`
display: flex;
align-items: center;

:hover {
  .MuiSvgIcon-root {
    color: ${({tw}) => (
      tw ? "#1da1f2":"#fff"
    )};
}
}
`;

const LinkF = styled.a`
display: flex;
align-items: center;
color: #fff;

:hover {
  .MuiSvgIcon-root {  
    color: ${({fb}) => (
      fb ? "#1877f2":"#fff"
    )}; 
}
}
`;

const LinkY = styled.a`
display: flex;
align-items: center;
color: #fff;

:hover {
  .MuiSvgIcon-root {
    color: ${({yb}) => (
      yb ? "#ff0000":"#fff"
    )};  
}
}
`;

const LinkI = styled.a`
display: flex;
align-items: center;
color: #fff;

:hover {
  .MuiSvgIcon-root {
    color: ${({inst}) => (
      inst ? "#c32aa3":"#fff"
    )};  
}
}
`;



const List = styled.div`
  margin: 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    color: rebeccapurple;;
    text-decoration: underline;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 100%;
  background-color: #1a1a1a;
  color: white;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
`;
