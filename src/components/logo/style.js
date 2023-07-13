import styled from 'styled-components'
import MathIcon from "./math_icon.svg"

export const LogoStyled = styled.span`
    display: inline-block;
    padding: 0;
    height: 42px;
    width: 42px;
    background-image: url(${MathIcon});
    background-size: contain;
    background-repeat: no-repeat;
`

export const LogoName = styled.h1`
    font-family: 'Montserrat';
    display: flex;
    font-size: 50px;
    font-weight: 900;
    margin: 0;
`