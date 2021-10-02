import React from 'react'
import styled from "styled-components"

const ContactSection = () => {
    return (
       <Container id="contact">
           <Wrapper>
               <ContactWrapper>
                <Title>Contact Me</Title>
                <Holder>
                    <Input placeholder="Enter your email" />
                    <Button>Submit</Button>
                </Holder>
               </ContactWrapper>
           </Wrapper>
       </Container>
    )
}

export default ContactSection

const ContactWrapper = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Title = styled.div`
font-weight: bold;
font-size: 30px;
margin-bottom: 20px;
text-transform: uppercase;
`;

const Holder = styled.div`
width: 300px;
background-color: #fff;
height: 50px;
border-radius: 40px;
display: flex;
align-items: center;

`;

const Input = styled.input`
border: 0;
outline: none;
flex: 1;
border-radius: 40px;
margin-left: 2px;
padding-left: 8px;
font-size: 18px;
`;

const Button = styled.button`
margin-right: 40px;
border: 0;
outline: none;
background-color: transparent;
font-size: 18px;
cursor: pointer;
color: #666;
`;

const Wrapper = styled.div`
width: 100%;
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 30vh;
background-color: #011834;
color: white;
`;

