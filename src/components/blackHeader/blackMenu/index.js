import React, { useContext } from "react";
// import "./style.css"
import { BlackLinkItem, BlackMenuContainer, BlackMenuLink } from "./style.js";
import { isLoggedInContext } from "../../../context/index.js";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlackMenu = () => {

    const navigate = useNavigate();

    const { 
        isLoggedIn, setIsLoggedIn
    } = useContext(isLoggedInContext);

    console.log("isLoggedIn inside menu:", isLoggedIn);

    const handleLogoutButton = () => {
        setIsLoggedIn(0);
        navigate('/');
    }

    return(
        <BlackMenuContainer>
            <BlackLinkItem>Личный кабинет</BlackLinkItem>
            <BlackLinkItem><BlackMenuLink to='/preAboutOlymp'>Об олимпиадах</BlackMenuLink></BlackLinkItem>
            {isLoggedIn === 1 ? (<BlackLinkItem><BlackMenuLink to='/chooseOlymp'>Задачи</BlackMenuLink></BlackLinkItem>) : (null)}
            {isLoggedIn === 1 ? <IconButton sx={{color: 'black'}} onClick={handleLogoutButton}><LogoutRoundedIcon></LogoutRoundedIcon></IconButton> : (null)}
        </BlackMenuContainer>         
    );
};

export default BlackMenu;