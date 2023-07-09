import React from "react";
import { Heading, NormalText } from "../../components/fonts/style";
import { SolveTaskBody } from "./style";
import { useState, useEffect } from "react";
import Data from "../../data.json";
import { useContext } from "react";
import { OlympContext } from "../../App";

const SolveTaskPage = () => {

    const {
        olympName, setOlympName,
        grade, setGrade,
        year, setYear,
        stage, setStage,
        taskNumber, setTaskNumber
    } = useContext(OlympContext);

    const [tex, setTex] = useState("");

    useEffect(()=>{
        if(typeof window?.MathJax !== "undefined"){
            window.MathJax.typesetClear();
            window.MathJax.typeset();
        }
    },[]);

    console.log(olympName, grade, year, stage);

    const desiredTasks = Data[olympName]
    .find((obj) => obj.grade === grade && obj.year === year && obj.stage === "final")["tasks"];

    console.log(desiredTasks);

    return(
        <SolveTaskBody>
            <Heading>TASK DISPLAY</Heading>
            <NormalText>{desiredTasks[0]["task"]}</NormalText>
            <NormalText>{desiredTasks[1]["task"]}</NormalText>
            <NormalText>{desiredTasks[2]["task"]}</NormalText>
        </SolveTaskBody>
    );
};

export default SolveTaskPage;