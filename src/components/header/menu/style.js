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
`

export const MenuLink = styled(Link)`
    color: white;
    text-decoration: none;
`
