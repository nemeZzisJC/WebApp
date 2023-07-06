import styled from "styled-components"
import { LogoStyled } from "../logo/style.js"

export const MenuLogo = styled(LogoStyled)`
    margin-left: 10px;
`

export const ContainerHeader = styled.div`
    position: fixed;
    height: 60px;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(256, 256, 256, 0);
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
`