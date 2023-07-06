import React from "react";
// import "./style.css"
import { Dropdown, DropdownContent, DropdownMenuIcon, LinkItem, Line} from "./style.js";

const Menu = () => {
    return(
        <DropdownMenuIcon tabIndex={0}>
            <DropdownContent>
                <LinkItem>Личный кабинет</LinkItem>
                <LinkItem>Сложность олимпиад</LinkItem>
                <LinkItem>Сколько задач</LinkItem>
                <LinkItem>Граничные баллы</LinkItem>                    
            </DropdownContent>
        </DropdownMenuIcon>
    );
};

export default Menu;