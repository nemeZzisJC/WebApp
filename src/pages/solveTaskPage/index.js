import React from "react";
import { Heading, NormalText } from "../../components/fonts/style";
import { BackgroundImageFixed, SolveTaskBody, TaskBody, TaskImage, TaskBodyText, TaskHeading, AnswerInputField, StyledCheckAllButton } from "./style";
import { useState, useEffect } from "react";
import Data from "../../data.json";
import { useContext } from "react";
import { OlympContext } from "../../context/index.js";
import { CheckOneButton } from "./style";
import { useSingleCheck } from "../../hooks/useSingleCheck.js";
import Header from "../../components/header";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import CongratsGif from "./congrats3.gif";
import EditingGif from "./editing.gif";
import { useNavigate } from "react-router-dom";


const SolveTaskPage = () => {

    useEffect(()=>{
        if(typeof window?.MathJax !== "undefined"){
            window.MathJax.typesetClear();
            window.MathJax.typeset();
        }
    },[]);

    const navigate = useNavigate();

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

    // ALERTS
    const correctOneTaskMessage = (task_index) => {
        toast.success(`Задача ${task_index + 1} решена верно! Вы молодец!`, {position: toast.POSITION.TOP_RIGHT, 
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined});
    }

    const incorrectOneTaskMessage = (task_index) => {
        toast.error(`К сожалению ответ на задачу ${task_index + 1} неверен. Не расстраивайтесь! У вас обязательно получится!`, {position: toast.POSITION.TOP_RIGHT,
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined
        })
    }

    const HandleCheckOneButtonClick = (task_index) => {
        const userAnswer = userAnswers[`userAnswer${task_index + 1}`];
        const correctAnswers = desiredTasks[task_index]["answers"];

        if (useSingleCheck(userAnswer, correctAnswers) === 1) {
            correctOneTaskMessage(task_index);
        } else {
            incorrectOneTaskMessage(task_index);
        }
    }

    const HandleCheckAllButtonClick = (tasksLength) => {
        let cnt = 0;
        for (let task_index = 0; task_index < tasksLength; ++task_index) {
            const userAnswer = userAnswers[`userAnswer${task_index + 1}`];
            const correctAnswers = desiredTasks[task_index]["answers"];

            for (let i = 0; i < correctAnswers.length; ++i) {
                if (userAnswer === correctAnswers[i]) {
                    cnt++;
                    break;
                }
            }
        }

        if (cnt == tasksLength) {
            Swal.fire({
                title: 'Все задачи решены верно!',
                text: 'Вы просто космос',
                imageUrl: "https://img.icons8.com/clouds/100/checkmark--v2.png",
                background: '#172627',
                color: 'white',
                backdrop: `
                    url(${CongratsGif})
                    top left
                    no-repeat
                `
            });
        } else {
            Swal.fire({
                title: `Результат: ${cnt}/${tasksLength}`,
                text: 'Продалжайте работать! У вас всё получится!',
                imageUrl: "https://img.icons8.com/clouds/100/work.png",
                background: '#172627',
                color: 'white'
            });
        }
    }

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
        <Header/>
        <BackgroundImageFixed></BackgroundImageFixed>
        <SolveTaskBody>
            <Heading style={{textAlign: 'center', width: '60%', marginTop: '15vh', color: 'white'}}>{olympName}, {grade} класс, {year} год, заключительный этап</Heading>

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
                    <CheckOneButton id={`useraAnswer${index}_button`} onClick={() => (HandleCheckOneButtonClick(index))}>
                        <NormalText style={{fontSize: 14}}>Проверить задачу</NormalText>
                    </CheckOneButton>
                    <ToastContainer/>

                </TaskBody>
            ))}
        <StyledCheckAllButton onClick={() => (HandleCheckAllButtonClick(tasksLength))}><NormalText>Проверить ответы</NormalText></StyledCheckAllButton>
        </SolveTaskBody>
        </>
    );
};

export default SolveTaskPage;