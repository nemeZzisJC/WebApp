import React from "react";
import { Heading } from "../../components/fonts/style";
import { ChooseClassPageContainer, ChoosePageBody } from "./style.js";
import ClassCard from "../../components/card/classCard";
import { useContext } from "react";
import { OlympContext } from "../../context/index.js";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";

const ChooseClassPage = () => {

    const {
        olympName, setOlympName,
        grade, setGrade,
        year, setYear,
        stage, setStage
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
            <Header></Header>
            <Heading style={{color: "white"}}>Выберите класс</Heading>
            <ChooseClassPageContainer>

                {values.map((value, index) => (
                    <ClassCard key={`${value}_grade_ClassCard`} onClick={() => handleClick(value.toString())}>
                        <Heading key={`${value}_grade_Heading`} style={{fontSize: 100}}>
                            {value}
                        </Heading>
                    </ClassCard>
                ))}
                
            </ChooseClassPageContainer>
        </ChoosePageBody>
    );
};

export default ChooseClassPage;