import React from "react";
import { ChoosePageBody } from "../chooseOlympPage/style.js";
import { Heading, NormalText } from "../../components/fonts/style.js";
import StyledList from "../../components/list/styledList.js";
import StyledListItemButton from "../../components/list/styledListItemButton";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useContext } from "react";
import { OlympContext } from "../../App.js";
import { useNavigate } from "react-router-dom";

const ChooseYearPage = () => {

    const {
        olympName, setOlympName,
        grade, setGrade,
        year, setYear,
        stage, setStage,
        taskNumber, setTaskNumber
    } = useContext(OlympContext);

    const values = ["2023", "2022", "2021", "2020", "2019", "2018"];
    let navigate = useNavigate();

    const handleClick = (value) => {
        setYear(value);
        console.log(year);
        navigate('/chooseClass');
    };

    return(
        <ChoosePageBody>
            <Heading style={{fontSize: "30px", marginTop: "8vh"}}>Выберите год олимпиады</Heading>
            <StyledList>
                {values.map((value, index) => (
                    <ListItem key={index}>
                        <StyledListItemButton onClick={() => {handleClick(value)}}>
                        <ListItemText>
                            <NormalText style={{fontSize: "20px"}}>{value}</NormalText>
                        </ListItemText>
                        </StyledListItemButton>
                    </ListItem>
                ))}
            </StyledList>
        </ChoosePageBody>
    );
};

export default ChooseYearPage;