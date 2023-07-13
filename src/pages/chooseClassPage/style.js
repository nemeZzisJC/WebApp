import styled from "styled-components";
import Back from "../mainPage/back4.png"

export const ChoosePageBody = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0;
    background-size: cover;
    background-image: url(${Back});
`

export const ChooseClassPageContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-basis: 1px;
    justify-content: space-evenly;
    align-content: center;
`
