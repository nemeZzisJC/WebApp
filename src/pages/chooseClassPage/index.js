import React from "react";
import { Heading } from "../../components/fonts/style";
import { ChooseClassPageContainer, ChoosePageBody } from "./style.js";
import ClassCard from "../../components/card/classCard";
import { useContext } from "react";
import { OlympContext } from "../../App";
import { useNavigate } from "react-router-dom";

const ChooseClassPage = () => {

    const {
        olympName, setOlympName,
        grade, setGrade,
        year, setYear,
        stage, setStage,
        taskNumber, setTaskNumber
    } = useContext(OlympContext);

    const navigate = useNavigate();
    const values = [9, 10, 11];

    const handleClick = (value) => {
        setGrade(value);
        console.log(grade);
        navigate('/chooseStage');
    };


    return (
        <ChoosePageBody>
            <Heading>Выберите класс</Heading>
            <ChooseClassPageContainer>

                {values.map((value, index) => (
                    <ClassCard onClick={() => handleClick(value.toString())}>
                        <Heading style={{fontSize: 100}}>
                            {value}
                        </Heading>
                    </ClassCard>
                ))}
                
            </ChooseClassPageContainer>
        </ChoosePageBody>
    );
};

export default ChooseClassPage;