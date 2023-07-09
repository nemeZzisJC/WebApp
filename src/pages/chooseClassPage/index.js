import React from "react";
import { Heading } from "../../components/fonts/style";
import { ChooseClassPageContainer, ChoosePageBody } from "./style.js";
import ClassCard from "./materialStyle";
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

    const handleClick = (value) => {
        setGrade(value);
        console.log(grade);
        navigate('/chooseYear');
    };

    return (
        <ChoosePageBody>
            <Heading>Выберите класс</Heading>
            <ChooseClassPageContainer>
                <ClassCard onClick={() => {handleClick('9')}}>
                    <Heading style={{fontSize: 100}}>
                    9
                    </Heading>
                </ClassCard>

                <ClassCard onClick={() => {handleClick('10')}}>
                    <Heading style={{fontSize: 100}}>
                    10
                    </Heading>
                </ClassCard>

                <ClassCard onClick={() => {handleClick('11')}}>
                    <Heading style={{fontSize: 100}}>
                    11
                    </Heading>
                </ClassCard>
                
            </ChooseClassPageContainer>
        </ChoosePageBody>
    );
};

export default ChooseClassPage;