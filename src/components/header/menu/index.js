import React from "react";
// import "./style.css"
import { LinkItem, MenuContainer, MenuLink } from "./style.js";

const Menu = () => {
    return(
        <MenuContainer>
            <LinkItem>Личный кабинет</LinkItem>
            <LinkItem><MenuLink to='/aboutOlymp'>Об олимпиадах</MenuLink></LinkItem>
        </MenuContainer>         
    );
};

export default Menu;