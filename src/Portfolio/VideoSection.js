import React from 'react'
import styled from "styled-components"
import video from "./media/Vision.mp4"


const VideoSection = () => {

    return (
       <Container id="video">
           <Wrapper>
                <Video src={video} 
                controls
                loop
                autoPlay muted/>
           </Wrapper>
       </Container>
    )
}

export default VideoSection

const Video = styled.video`
width: 90%;
height: 80%;
margin: 30px auto; 
object-fit: cover;
border-radius: 10px;
`;

const Container = styled.div`
width: 100%;
height: 100%;
background-color: black;
color: #fff;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
`;
