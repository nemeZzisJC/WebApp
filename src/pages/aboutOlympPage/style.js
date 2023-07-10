import styled from "styled-components"
import { Heading } from "../../components/fonts/style"
import Back from "../mainPage/back2.jpg"


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
    margin-top: 10vh;
    margin-left: 4vw;
    width: fit-content;
    display: inline-block;
`


export const AboutInfoImage = styled.img`
    display: block;
    height: auto;
`

export const AboutInfoHeading = styled(Heading)`
    display: block;
    margin-bottom: 4vh;
    font-size: 55px;
`

export const AboutInfoTextContainer = styled.div`
    width: 40%;
    display: inline-block;
    display: flex;
    flex-direction: column;
    justify-content: center;
`