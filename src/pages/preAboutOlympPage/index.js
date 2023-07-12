import React, { useContext } from "react";
import { FourOlympDiv, MainContainer, MainHeadingDiv, OlympiadAvatarDiv, OlympiadAvatarInline, PreAboutOlympInfoPageBody } from "./style";
import { Heading, NormalText } from "../../components/fonts/style";
import { Avatar, IconButton } from "@mui/material";
import { aboutOlympNameContext } from "../../context";
import { useNavigate } from "react-router-dom";

const PreAboutOlympInfoPage = () => {

    const navigate = useNavigate();

    const {
        aboutOlympName, setAboutOlympName
    } = useContext(aboutOlympNameContext); 

    const HandleChoosingAboutClick = (olName) => {
        setAboutOlympName(olName);
        console.log("olName", olName);

        navigate('/aboutOlymp');
    }

    return(
        <PreAboutOlympInfoPageBody>
            <MainContainer>
                <MainHeadingDiv>
                    <Heading style={{fontSize: 60}}>Окунитесь в олимпиадный мир</Heading>
                </MainHeadingDiv>
            </MainContainer>

            <FourOlympDiv>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'orange'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Ломоносов'))}>
                    <Avatar src="https://i.ibb.co/pLHrMzJ/phystech-logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Ломоносов</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'blue'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Физтех'))}>
                    <Avatar src="https://i.ibb.co/pLHrMzJ/phystech-logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Физтех</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'blue'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('ОММО'))}>
                    <Avatar src="https://i.ibb.co/pLHrMzJ/phystech-logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>ОММО</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'blue'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Покори Воробьёвы Горы'))}>
                    <Avatar src="https://i.ibb.co/pLHrMzJ/phystech-logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Покори Воробьёвы Горы</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

            </FourOlympDiv>

            <FourOlympDiv>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'orange'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Высшая Проба'))}>
                    <Avatar src="https://i.ibb.co/pLHrMzJ/phystech-logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Высшая Проба</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'blue'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('МОШ'))}>
                    <Avatar src="https://i.ibb.co/pLHrMzJ/phystech-logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>МОШ</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'blue'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Курчатов'))}>
                    <Avatar src="https://i.ibb.co/pLHrMzJ/phystech-logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Курчатов</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'blue'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Росатом'))}>
                    <Avatar src="https://i.ibb.co/pLHrMzJ/phystech-logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Росатом</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

            </FourOlympDiv>
        </PreAboutOlympInfoPageBody>
    )
}

export default PreAboutOlympInfoPage;