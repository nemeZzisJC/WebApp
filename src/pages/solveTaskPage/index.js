import React from "react";
import { Heading, MonoHeading, NormalText } from "../../components/fonts/style";
import { BackgroundImageFixed, SolveTaskBody, TaskBody, TaskImage, TaskBodyText, TaskHeading } from "./style";
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

    const desiredTasks = Data[olympName]
    ?.find((obj) => obj.grade === grade && obj.year === year && obj.stage === "заключительный этап")["tasks"];

    const displayTask = (task_number) => {
        let content = [];
        const placement = desiredTasks[task_number]["placement"];
        const images = desiredTasks[task_number]["images"];
        const images_width = desiredTasks[task_number]["images_width"];
        let j = 0;

        for (let i = 0; i < desiredTasks[task_number]["task"].length; ++i) {
            // adding the text
            content.push(<NormalText key={`${olympName}_${grade}_${year}_${stage}_${i}_paragraph`} style={{margin: '2vh 0'}}>{desiredTasks[task_number]["task"][i]}</NormalText>);

            // if an image should be placed after the paragraph, place it
            if (placement && j < placement.length) {
                if (i === placement[j]) {
                    content.push(<TaskImage src={images[j]} style={{width: `${images_width[j]}`}}></TaskImage>);
                    j++;
                } 
            }
        }
        return content;
    }

    return(
        <>
        <BackgroundImageFixed></BackgroundImageFixed>
        <SolveTaskBody>
            <Heading style={{textAlign: 'center', width: '60%', marginTop: '10vh'}}>{olympName}, {grade} класс, {year} год, заключительный этап</Heading>
            {desiredTasks.map((value, index) => (
                <TaskBody key={`${olympName}_${grade}_${year}_${stage}_${index}_TaskBody`}>
                    <TaskHeading key={`${olympName}_${grade}_${year}_${stage}_${index}_TaskHeading`}>Задание {index + 1}</TaskHeading>
                    <TaskBodyText key={`${olympName}_${grade}_${year}_${stage}_${index}_TaskBodyText`}>{displayTask(index)}</TaskBodyText>
                </TaskBody>
            ))}
        </SolveTaskBody>
        </>
    );
};

export default SolveTaskPage;