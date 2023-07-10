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
    color: rgb(1, 161, 108);
    text-decoration: none;
`

export const TextSectionList = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 5vh;
`

export const AttentionText = styled(NormalText)`
    color: #B9202E;
`