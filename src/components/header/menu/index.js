import React, { useContext } from "react";
// import "./style.css"
import { LinkItem, MenuContainer, MenuLink } from "./style.js";
import { isLoggedInContext } from "../../../context/index.js";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Menu = () => {

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
        <MenuContainer>
            <LinkItem>Личный кабинет</LinkItem>
            <LinkItem><MenuLink to='/preAboutOlymp'>Об олимпиадах</MenuLink></LinkItem>
            {isLoggedIn === 1 ? (<LinkItem><MenuLink to='/chooseOlymp'>Задачи</MenuLink></LinkItem>) : (null)}
            {isLoggedIn === 1 ? <IconButton sx={{color: 'black'}} onClick={handleLogoutButton}><LogoutRoundedIcon></LogoutRoundedIcon></IconButton> : (null)}
        </MenuContainer>         
    );
};

export default Menu;