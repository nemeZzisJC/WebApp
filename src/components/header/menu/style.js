import styled from 'styled-components';
import { NormalText } from '../../fonts/style';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
    display: flex;
    margin-right: 3vw;
    align-items: center;
`

export const LinkItem = styled(NormalText)`
    padding: 15px 0px;
    margin: 0px 20px;
    cursor: pointer;
`

export const MenuLink = styled(Link)`
    color: black;
    text-decoration: none;
`
