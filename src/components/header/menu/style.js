import styled from 'styled-components';
import { PoppinsUpperCase } from '../../fonts/style';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
    display: flex;
    margin-right: 3vw;
    align-items: center;
`

export const LinkItem = styled(PoppinsUpperCase)`
    padding: 15px 0px;
    margin: 0px 20px;
    cursor: pointer;
    font-size: 13px;
    position: relative;

    &:after {
        content: "";
        opacity: 0;
        position: absolute;
        top: 75%;
        left: 0;
        width: 100%;
        border: 0.5px solid white;
        color: white;
        transition: opacity 0.3s ease;
    }

    &:hover {
        &:after {
            opacity: 1;
        }
    }
`

export const MenuLink = styled(Link)`
    color: white;
    text-decoration: none;
`
