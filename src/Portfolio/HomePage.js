import React from 'react'
import styled from "styled-components"
import HeaderNav from "./HeaderNav"
import HeroSection from "./HeroSection"
import ServiceSection from './ServiceSection'
import VideoSection from "./VideoSection"
import ContactSection from "./ContactSection"
import FooterSection from "./FooterSection"
import PulsateButton from "./PulsateButton"

const HomePage = ({toggle}) => {
    return (
        <Container>
            <Wrapper>
                <HeaderNav />
                <HeroSection />
                <ServiceSection />
                <VideoSection />
                <ContactSection />
                <PulsateButton />
                <FooterSection />
            </Wrapper>
        </Container>
    )
}

export default HomePage

const Container = styled.div`
font-family: Poppins;
`;

const Wrapper = styled.div`
`;
