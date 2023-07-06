import styled from "styled-components"
import { LogoStyled } from "../../components/logo/style"
import { NormalText } from "../../components/fonts/style"

export const MainPageBody = styled.div`
    text-align: center;
    width: 100hh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80');
`

export const MainPageLogoStyled = styled(LogoStyled)`
    margin-right: 5px;
    width: 50px;
    height: 50px;
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

export const StartButton = styled.button`
    margin-top: 25px;
    width: 12rem;
    height: 3rem;
    background-color: rgba(1, 161, 108, 1);
    border: none;
    box-shadow: 0px 3.5px rgb(1, 127, 85);
    border-radius: 10px 10px 10px 10px;
`

export const MainPageNormalText = styled(NormalText)`
    font-weight: 550;
`