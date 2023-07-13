import React from "react";
import { BlackContainerHeader, BlackMenuLogo } from "./style.js";
import { Link } from "react-router-dom";
import BlackMenu from "./blackMenu"

const BlackHeader = () => {
    return (
        <BlackContainerHeader>
            <Link to='/'><BlackMenuLogo></BlackMenuLogo></Link>
            <BlackMenu/>
        </BlackContainerHeader>
    );
};

export default BlackHeader;