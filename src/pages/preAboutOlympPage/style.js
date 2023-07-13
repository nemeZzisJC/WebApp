import styled from "styled-components";
import Back from "../mainPage/back4.png"
import { NormalText } from "../../components/fonts/style";

export const PreAboutOlympInfoPageBody = styled.div`
    width: 100%;
`

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: green;
    display: flex;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Back});
`

export const MainHeadingDiv = styled.div`
    width: 50%;
    display: flex;
    margin-top: 40vh;
    margin-left: 5vw;
`

export const MainContainerImage = styled.img`
    display: flex;
    height: 57vh;
    width: auto;
    margin-right: 7vw;
    position: absolute;
    right: 0;
    margin-top: 25vh;
`

export const FourOlympDiv = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
`

export const OlympiadAvatarInline = styled.div`
    display: inline-block;
    height: 40vh;
    width: 25%;
    margin: 0;
`

export const OlympiadAvatarDiv = styled.div`
    display: flex;
    height: 40vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #20CD8D;
`

export const NormalTextPreOlymp = styled(NormalText)`
    font-weight: 700;
`