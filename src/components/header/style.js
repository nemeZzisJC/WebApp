import styled from "styled-components"
import { LogoStyled } from "../logo/style.js"

export const MenuLogo = styled(LogoStyled)`
    margin-left: 20px;
`

export const ContainerHeader = styled.div`
    position: absolute;
    top: 0;
    height: 80px;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0);
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
`