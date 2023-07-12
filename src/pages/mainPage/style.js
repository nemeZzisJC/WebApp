import styled from "styled-components"
import { LogoStyled } from "../../components/logo/style"
import { MonoHeading, NormalText, PreInfoHeading } from "../../components/fonts/style"
import Back from "./back2.jpg"

export const MainPageBody = styled.div`
    width: 100%;
`

// MAIN PAGE GET STARTED
export const MainPageGetStarted = styled.div`
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Back});
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`

export const ShortInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`

export const MainPageLogoStyled = styled(LogoStyled)`
    margin-right: 5px;
    width: 50px;
    height: 50px;
`

export const MainPageNormalText = styled(NormalText)`
    font-weight: 600;
`

export const StartButton = styled.button`
    margin-top: 25px;
    width: 12rem;
    height: 3rem;
    background-color: #02cc88;
    border: none;
    box-shadow: 0px 3.5px rgb(1, 161, 108);
    border-radius: 10px 10px 10px 10px;
    margin-left: auto;
    margin-right: auto;
`

// MAIN PAGE TEXT SECTION (QUESTION/ANSWER)
export const TextSection = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #F3F5F8;
`

export const TextSectionHeader = styled(PreInfoHeading)`
    position: relative;
    display: inline-block;

    &:after {
        content: "";
        position: absolute;
        display: block;
        top: 100%;
        left: 25%;
        width: 50%;
        height: 0.5px;
        background-color: black;
        margin-top: 20px;
    }
`

export const TextSectionTextContainer = styled(PreInfoHeading)`
    width: 40%;
    height: fit-content;
    margin-top: 7vh;
`

// MAIN PAGE OPTION CARDS
export const OptionSectionWithHeading = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

export const OptionSectionHeading = styled(PreInfoHeading)`
    margin-bottom: 40px;
`

export const OptionSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const OptionSectionItem = styled.div`
    width: 25%;
    height: 45vh;
    background-color: #F3F5F8;
    border: 0.1px solid rgb(150, 150, 150);
    box-shadow: 5px 4px rgb(199, 201, 204);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const OptionSectionItemText = styled(NormalText)`
    margin: 25px 60px 0px;
    line-height: 1.65;
`

// GRID SECTION
export const GridSection = styled.div`
    width: 100%;
    height: 100vh;
    display: inline-block;
    padding: 0;
    margin: 0;
    position: relative;
`

export const GridSectionQuestion = styled.div`
    width: 40%;
    height: 100vh;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F3F5F8;
`

export const GridSectionFirst = styled.div`
    position: absolute;
    top: 0;
    left: 40%;
    width: 30%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #e8e9ea;
`

export const GridSectionSecond = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #e0e1e2;
`

export const GridSectionThird = styled.div`
    position: absolute;
    bottom: 0;
    left: 40%;
    width: 30%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #e0e0e0;
`

export const GridSectionFourth = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #d1d1d1;
`
export const MonoHeadingElements = styled(MonoHeading)`
    margin-bottom: 25px;
`