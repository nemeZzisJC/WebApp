import React from "react";
import { ChoosePageBody } from "../chooseClassPage/style";
import { Heading } from "../../components/fonts/style";
import { ChooseClassPageContainer } from "../chooseClassPage/style";
import ClassCard from "../../components/card/classCard.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { OlympContext } from "../../context/index.js";

const ChooseStagePage = () => {

    const {
        olympName, setOlympName,
        grade, setGrade,
        year, setYear,
        stage, setStage
    } = useContext(OlympContext);

    const values = ["Отборочный этап", "Заключительный этап"];
    const navigate = useNavigate();

    const handleClick = (value) => {
        setStage(value);
        console.log(stage);
        navigate('/solveTask');
    }

    return(
        <ChoosePageBody>
            <Heading style={{marginBottom: '5vh'}}>Выберите этап олимпиады</Heading>
            <ChooseClassPageContainer>
                {values.map((value, index) => (
                    <ClassCard sx={{width: '30%'}} onClick={() => handleClick(value.toLowerCase())} key={index}>
                        <Heading style={{fontSize: 30}}>
                            {value}
                        </Heading>
                    </ClassCard>
                ))}

            </ChooseClassPageContainer>
        </ChoosePageBody>
    );
};

export default ChooseStagePage;