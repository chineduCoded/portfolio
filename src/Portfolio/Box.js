import React from 'react'
import styled from "styled-components"
import { devices } from "./Constant/Device"

const Box = () => {
    return (
        <BoxWrapper>
           
        </BoxWrapper>
    )
}

export default Box

const BoxWrapper = styled.div`
background-color: red;
width: 200px;
height: 200px;
${devices("md")`
    background-color: green;
    width: 500px;
`};
${props => devices("md") (`width: ${props.width}px`)}
`;
