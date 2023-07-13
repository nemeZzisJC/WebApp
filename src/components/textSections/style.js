import styled from "styled-components";
import { NormalText } from "../fonts/style";

export const TextSectionContainer = styled.div`
    padding: 10vh 5vw;
`

export const HeadingAndIcon = styled.div`
    display: flex;
    align-items: center;
`

export const TextSectionText = styled.div`
    width: 80%;
    margin-top: 5vh;
`

export const PreLinkText = styled(NormalText)`
    font-weight: 800;
`

export const TextSectionLink = styled.a`
    color: #670087;
    font-weight: 800;
    text-decoration: none;
    position: relative;

    &:after {
        content: "";
        opacity: 0;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        border: 0.5px solid #670087;
        color: #670087;
        transition: opacity 0.3s linear;
    }

    &:hover {
        &:after {
            opacity: 1;
        }
    }
`

export const TextSectionInnerList = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 5vh;
`

export const AttentionText = styled(NormalText)`
    color: #d83220;
    font-weight: 700;
`