import React, { useContext } from "react";
import { FourOlympDiv, MainContainer, MainContainerImage, MainHeadingDiv, OlympiadAvatarDiv, OlympiadAvatarInline, PreAboutOlympInfoPageBody } from "./style";
import { BoldHeading, Heading, NormalText } from "../../components/fonts/style";
import { Avatar, IconButton } from "@mui/material";
import { aboutOlympNameContext } from "../../context";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Mosh from "./mosh.png"

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
            <Header/>
            <MainContainer>
                <MainHeadingDiv>
                    <BoldHeading style={{fontSize: '4rem', lineHeight: 1}}>Окунитесь в мир <span style={{color: '#00FF5E'}}>олимпиадной математики</span></BoldHeading>
                </MainHeadingDiv>
                <MainContainerImage src="https://mathsolymp.my.canva.site/company-website-business-website-in-violet-dark-blue-neon-pink-gradient-tech-style/images/011238d3908b79a98d5033805ed3d109.svg"></MainContainerImage>
            </MainContainer>

            <FourOlympDiv>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Ломоносов'))}>
                    <Avatar src="https://fs02.rchuv.ru/rchuv19/etker/news/2021/10/22/8d203d1c-83cd-4c84-997d-a282aa11a0b6/lomonosov.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Ломоносов</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'white'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Физтех'))}>
                    <Avatar src="https://i.ibb.co/pLHrMzJ/phystech-logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Физтех</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('ОММО'))}>
                    <Avatar src="https://static.tildacdn.com/tild3732-3731-4566-b832-313962663762/Screenshot_at_Dec_16.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>ОММО</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'white'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Покори Воробьёвы Горы'))}>
                    <Avatar src="https://www.stavplus.ru/media/k2/items/cache/a92e06bd757eada1a48b2d09e96a31e5_XL.jpg" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Покори Воробьёвы Горы</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

            </FourOlympDiv>

            <FourOlympDiv>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'white'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Высшая Проба'))}>
                    <Avatar src="https://olimpiada.ru/files/m_activity/22/vysshaya-proba.jpg" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Высшая Проба</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('МОШ'))}>
                    <Avatar src={Mosh} sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>МОШ</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv style={{backgroundColor: 'white'}}>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Курчатов'))}>
                    <Avatar src="https://olimpiadakurchatov.ru/upload/images/nrcki_logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Курчатов</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Росатом'))}>
                    <Avatar src="https://top-fon.com/uploads/posts/2023-01/thumbs/1674747822_top-fon-com-p-rosatom-fon-dlya-prezentatsii-63.jpg" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalText>Росатом</NormalText>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

            </FourOlympDiv>
        </PreAboutOlympInfoPageBody>
    )
}

export default PreAboutOlympInfoPage;