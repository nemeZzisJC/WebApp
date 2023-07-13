import styled from "styled-components";
import Back from "../mainPage/back4.png"

export const ChoosePageBody = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${Back});
    background-size: cover;
`