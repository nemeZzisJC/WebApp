import React from "react";
import { ChoosePageBody } from "./style";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NormalText, Heading } from "../../components/fonts/style";
import StyledList from "../../components/list/styledList.js";
import StyledListItemButton from "../../components/list/styledListItemButton.js"
import { useContext } from "react";
import { OlympContext } from "../../context/index.js";
import { useNavigate } from "react-router-dom";

const ChooseOlympPage = () => {

    let navigate = useNavigate();

    const {
        olympName, setOlympName,
        grade, setGrade,
        year, setYear,
        stage, setStage
    } = useContext(OlympContext);

    const handleClick = (value) => {
        setOlympName(value);
        console.log(olympName);
        navigate('/chooseYear');
    }

    const values = ["Ломоносов", "Физтех", "ОММО", "Покори Воробьёвы Горы", "Высшая Проба", "МОШ", "Курчатов", "Росатом"]
    return(
        <ChoosePageBody>
            <Heading style={{fontSize: "30px", marginTop: "8vh"}}>Выберите олимпиаду</Heading>
            <StyledList>
                {values.map((value, index) => (
                    <ListItem key={`ListItem_${index}`} sx={{padding: "2px 4px"}}>
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

export default ChooseOlympPage;