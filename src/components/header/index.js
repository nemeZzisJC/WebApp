import React from "react";
import { ContainerHeader, MenuLogo } from "./style.js";
import { Link } from "react-router-dom";
import Menu from "./menu"

const Header = () => {
    return (
        <ContainerHeader>
            <Link to='/'><MenuLogo></MenuLogo></Link>
            <Menu/>
        </ContainerHeader>
    );
};

export default Header;