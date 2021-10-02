import React from 'react'
import styled from "styled-components"
import TypeIt from "typeit-react"
import img from "./media/4.jpg"

const HeroSection = () => {
    return (
        <Container id="home">
            <Wrapper>
                <Image src={img} />
                <Content>
                    <Title>
                        <TypeIt
                            options={{
                            strings: ["I am Elijah Chinedu"],
                            speed: 90,
                            waitUntilVisible: true,
                            loop: true,
                            }}
                        />
                    </Title>
                    <Desc>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </Desc>
                    <Div>
                        <Button>View cv</Button>
                        <Button>Contact</Button>
                    </Div>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default HeroSection

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
color: #fff;
padding-top: 80px;
background-image: url(header.jpg);
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
padding-top: 40px;
`;

const Image = styled.img`
width: 300px;
height: 300px;
margin: 0 20px;
background-color: teal;
border-radius: 50%;
object-fit: cover;
margin-bottom: 10px;
`;

const Content = styled.div`
width: 400px;
padding-bottom: 20px;
margin: 0 20px;
`;

const Title = styled.div`
font-weight: bold;
font-size: 30px;
margin: 10px 10px;
color: #eee;
`;

const Desc = styled.div`
margin: 0 10px;
text-aign: center;
width: 100%;
`;

const Div = styled.div`
margin-top: 80px;

`;

const Button = styled.button`
margin: 0 10px;
width: 120px;
height: 50px;
font-weight: bold;
outline: none;
border: 4px solid white;
border-radius: 5px;
background-color: transparent;
color: white;
text-transform: uppercase;
transform: scale(1.0);
transiion: all 400ms;

:hover{
    cursor: pointer;
    border: 4px solid #011834;
    backround-color: white;
    color: #fff;
    transform: scale(1.05);
}

`;
