import React from 'react'
import styled from "styled-components"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { animateScroll as Scroll } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const PulsateButton = () => {
    return (
        <Container>
            <Wrapper>

            <ScrollAnimation animateIn="fadeIn"
            duration="2" animateOut="fadeIn"
            >
                <ArrowCircleUpIcon 
                    onClick={() => {
                        Scroll.scrollToTop();
                        }} />
            </ScrollAnimation>
                
            </Wrapper>
        </Container>
    )
}

export default PulsateButton

const Container = styled.div`
width: 100%;
height: 50px;
min-height: 12vh;

`;

const Wrapper = styled.div`
display: flex;
padding-top: 10px;
justify-content: flex-end;
align-items: center;
margin-right: 30px;
-webkit-perspective: 1000;
-webkit-backface-visibility: hidden;


.MuiSvgIcon-root {
    font-size: 50px;
    transition: all 400ms;
    color: crimson;
}

:hover {
    cursor: pointer;
}


`;
