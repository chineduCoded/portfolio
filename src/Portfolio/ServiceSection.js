import React from 'react'
import styled from "styled-components"
import data from "./data.json"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceSection = () => {

    const settings = {
        dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    //   
      }

    return (
        <Container id="service">
            <Wrapper>
                <Slide {...settings}>
                    {data.map((props) => (
                    <Card>
                        <Image src={props.img}/>
                        <Content>
                            <Title>{props.title}</Title>
                            <Desc>{props.desc}</Desc>
                        </Content>
                    </Card>
                    ))}
                </Slide>
            </Wrapper>
        </Container>
    )
}

export default ServiceSection

const Slide = styled(Slider)`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
color: white;
.slick-slide > div {
    margin: 0 10px;
  }
   
  .slick-list {
    margin: 0 -10px;
  }
   
  .slick-slide *:focus{
    outline: none;
  }
`;

const Desc = styled.div`
margin: 0 10px;
text-align: center;
`;

const Title = styled.div`
margin: 10px;
font-weight: bold;
font-size: 20px;
text-align: center;
text-transform: uppercase;
line-spacing: 1;
`;

const Content = styled.div`
color: black;
padding: 15x;
`;

const Image = styled.img`
width: 100%;
height: 55%;
object-fit: cover;
border-radius: 5px 5px 0 0;
`;

const Card = styled.div`
width: 280px;
height: 500px;
margin: 15x 5px;
border-radius: 6px;
background: #f5f5f5;
color: teal;
overflow: hidden;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
transition: all 0.3s;

:hover {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2); 
    cursor: pointer;
    transform: scale(1.03);
    border-radius: 6px;
}
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
color: #fff;
background: #DCDCDC;
`;

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
padding: 40px 0;

`;

