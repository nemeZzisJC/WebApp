import styled from "styled-components"
import { BoldHeading, Heading } from "../../components/fonts/style"
import Back from "../mainPage/back4.png"


// INFO ABOUT OLYMP SECTION
export const AboutOlympPageBody = styled.div`
    width: 100%;
`

export const AboutInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

export const AboutInfoHeadingImage = styled.div`
    margin-top: 13vh;
    margin-left: 5vw;
    width: fit-content;
    display: inline-block;
`


export const AboutInfoImage = styled.img`
    display: block;
    height: auto;
`

export const AboutInfoHeading = styled(BoldHeading)`
    display: block;
    margin-bottom: 4vh;
    font-size: 6rem;
    font-weight: 600;
    color: black;
`

export const AboutInfoTextContainer = styled.div`
    width: 40%;
    display: inline-block;
    display: flex;
    flex-direction: column;
    justify-content: center;
`