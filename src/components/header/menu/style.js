import styled from 'styled-components'
import { NormalText } from '../../fonts/style'

export const DropdownMenuIcon = styled.span`
    border: none;
    padding: 0;
    backgorund-color: transparent;
    width: 32px;
    height: 32px;
    background-image: url("https://i.ibb.co/PrzRQwt/menu.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    margin-right: 30px;
`

export const DropdownContent = styled.div`
    text-align: center;
    padding: 3px 10px;
    top: 32px;
    right: 0px;
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: rgba(256, 256, 256, 0.1);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    min-width: 200px;
    z-index: 1;
    border: none;
    border-radius: 3px;

    ${DropdownMenuIcon}:focus & {
        display: flex;
    }
`

export const LinkItem = styled(NormalText)`
    padding: 15px 0px;
    cursor: pointer;
`

export const Line = styled.div`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: rgb(0, 0, 0, 1);
`
