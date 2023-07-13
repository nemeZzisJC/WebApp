import styled from 'styled-components';
import { PoppinsUpperCase } from '../../fonts/style';
import { Link } from 'react-router-dom';

export const BlackMenuContainer = styled.div`
    display: flex;
    margin-right: 3vw;
    align-items: center;
`

export const BlackLinkItem = styled(PoppinsUpperCase)`
    padding: 15px 0px;
    margin: 0px 20px;
    cursor: pointer;
    font-size: 13px;
    position: relative;
    color: black;

    &:after {
        content: "";
        opacity: 0;
        position: absolute;
        top: 75%;
        left: 0;
        width: 100%;
        border: 0.5px solid black;
        color: black;
        transition: opacity 0.3s ease;
    }

    &:hover {
        &:after {
            opacity: 1;
        }
    }
`

export const BlackMenuLink = styled(Link)`
    color: black;
    text-decoration: none;
`
