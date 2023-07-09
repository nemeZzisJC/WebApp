import styled from "styled-components"
import Back from "../mainPage/back2.jpg"
import { NormalText } from "../../components/fonts/style"

export const SolveTaskBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BackgroundImageFixed = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Back});
    background-size: cover;
    z-index: -100;
    position: fixed;
`

export const TaskImage = styled.img`
    display: block;
    height: auto;
    margin: 7vh auto;
`

export const TaskBody = styled.div`
    width: 75%;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    padding-top: 10vh;
    padding-bottom: 10vh;
    margin-top: 7vh;
    margin-bottom: 7vh;
`

export const TaskBodyText = styled.div`
    margin-left: 10vw;
    margin-right: 10vw;
`

export const TaskHeading = styled(NormalText)`
    font-size: 30px;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 3vh;
    color: rgb(1, 161, 108);
`