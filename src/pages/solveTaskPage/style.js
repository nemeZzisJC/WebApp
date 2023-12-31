import styled from "styled-components"
import Back from "../mainPage/back4.png"
import { NormalText } from "../../components/fonts/style"
import { AuthSubmitButton } from "../registrationPage/style"

export const SolveTaskBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BackgroundImageFixed = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #197f58;
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

export const AnswerInputField = styled.span`
    height: 5vh;
    display: flex;
    align-items: center;
    margin-left: 10vw;
    margin-top: 10vh;
    margin-bottom: 3vh;
`

export const CheckOneButton = styled(AuthSubmitButton)`
    padding: 15px 40px;
    margin-left: 10vw;
`

export const StyledCheckAllButton = styled(AuthSubmitButton)`
    padding: 15px 40px;
    margin-bottom: 10vh;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid white;

    transition: border 0.3s ease;

    &:hover{
        border-color: black;
    }
`