import styled from "styled-components"
import { LogoStyled } from "../../components/logo/style"
import { GridSectionMainHeading, NormalText, PoppinsNormalText, PreInfoHeading, BoldHeading } from "../../components/fonts/style"
import Back from "./back4.png"

export const MainPageBody = styled.div`
    width: 100%;
`

// NEW MAIN PAGE GET STARTED
export const MainPageGetStarted = styled.div`
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Back});
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GetStartedTextSection = styled.div`
    margin-top: 18vh;
    width: 42%;
    height: 70vh;
    display: inline-block;
`

export const GetStartedImageSection = styled.img`
    margin-top: 15vh;
    margin-left: 10%;
    display: inline-block;
    width: 32%;
    height: auto;
`

export const MainHeadingDiv = styled.div`
    width: 100%;
`

export const HeadingPartDiv = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
`

export const GetStartedTextDiv = styled.div`
    width: 100%;
    margin-top: 5vh;
`

export const GetStartedTextStyle = styled(PoppinsNormalText)`
    font-size: 1.3rem;
    font-weight: 600;
`

export const GetStartedButton = styled.button`
    padding: 1rem 3rem;
    border: 2px solid white;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0);
    margin-top: 5vh;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
    color: white;

    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
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
`

export const TextSectionHeader = styled(BoldHeading)`
    color: #20CD8D;
    font-size: 2rem;
`

export const TextSectionTextContainer = styled(PreInfoHeading)`
    width: 45%;
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
    height: 90vh;
    background-color: #20CD8D;
`

export const OptionSectionHeading = styled(TextSectionHeader)`
    margin-bottom: 70px;
    color: white;
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
    background-color: #172627;
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
    background-color: #B0FFE2;
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
    background-color: #82FFCB;
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
    background-color: #1DCD8D;
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
    background-color: #23AF7B;
`
export const GridElementsHeading = styled(GridSectionMainHeading)`
    margin-bottom: 25px;
    color: #172627;
`