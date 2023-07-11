import React from "react";
import { Heading, NormalText } from "../../components/fonts/style";
import { BackgroundImageFixed, SolveTaskBody, TaskBody, TaskImage, TaskBodyText, TaskHeading, AnswerInputField } from "./style";
import { useState, useEffect } from "react";
import Data from "../../data.json";
import { useContext } from "react";
import { OlympContext } from "../../context/index.js";
import { CheckOneButton } from "./style";

const SolveTaskPage = () => {

    const {
        olympName, setOlympName,
        grade, setGrade,
        year, setYear,
        stage, setStage
    } = useContext(OlympContext);

    const desiredTasks = Data[olympName]
    ?.find((obj) => obj.grade === grade && obj.year === year && obj.stage === "заключительный этап")["tasks"];
    const tasksLength = desiredTasks.length;

    // filling function for userAnswers state
    const fillInitialUserAnswers = (tasksLength) => {
        for (let i = 1; i <= tasksLength; ++i) {
            const userAnswerKey = `userAnswer${i}`;
            initialUserAnswers[userAnswerKey] = "";
        }
    }

    const InitializeMathFields = (tasksLength) => {
        useEffect(() => {
          for (let i = 1; i <= tasksLength; ++i) {
            const mathField = document.getElementById(`userAnswer${i}`);
            if (mathField) {
                mathField.addEventListener("input", (ev) => {
                const useStateName = mathField.id;
                const useStateValue = mathField.value;
                setUserAnswer((prevState) => ({
                  ...prevState,
                  [useStateName]: useStateValue,
                }));
              });
            }
          }
        }, []);
      };

    // creating an empty object, that will then contain all the need keys for userAnswers state
    let initialUserAnswers = {};
    // filling the object with needed field
    fillInitialUserAnswers(tasksLength);

    const [userAnswers, setUserAnswer] = useState(initialUserAnswers);
    InitializeMathFields(tasksLength);
    console.log("USER ANSWERS");
    console.log(userAnswers);

    useEffect(()=>{
        if(typeof window?.MathJax !== "undefined"){
            window.MathJax.typesetClear();
            window.MathJax.typeset();
        }
    },[]);

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
                    content.push(<TaskImage key={`${olympName}_${grade}_${year}_${stage}_${i}_image_${j}`} src={images[j]} style={{width: `${images_width[j]}`}}></TaskImage>);
                    j++;
                } 
            }
        }
        return content;
    }

    console.log(`OlympContext: ${olympName}, ${grade}, ${year}, ${stage}`);

    return(
        <>
        <BackgroundImageFixed></BackgroundImageFixed>
        <SolveTaskBody>
            <Heading style={{textAlign: 'center', width: '60%', marginTop: '10vh'}}>{olympName}, {grade} класс, {year} год, заключительный этап</Heading>

            {desiredTasks.map((value, index) => (
                <TaskBody key={`${olympName}_${grade}_${year}_${stage}_${index}_TaskBody`}>

                    {/* Heading with task number */}
                    <TaskHeading key={`${olympName}_${grade}_${year}_${stage}_${index}_TaskHeading`}>Задание {index + 1}</TaskHeading>

                    {/* Task text */}
                    <TaskBodyText key={`${olympName}_${grade}_${year}_${stage}_${index}_TaskBodyText`}>{displayTask(index)}</TaskBodyText>

                    {/* Answer input field here */}
                    <AnswerInputField>
                        <NormalText>Ответ :</NormalText><math-field id={`userAnswer${index + 1}`} value={userAnswers[`userAnswer${index + 1}`]} style={{marginLeft: '1vw', minWidth: '10vw'}}></math-field>
                    </AnswerInputField>

                    {/* Check this task button */}
                    <CheckOneButton style={{marginLeft: "10vw"}} id={`useraAnswer${index}_button`} class='math_field_input'>
                        <NormalText style={{fontSize: 14}}>Проверить задачу</NormalText>
                    </CheckOneButton>

                </TaskBody>
            ))}
        </SolveTaskBody>
        </>
    );
};

export default SolveTaskPage;