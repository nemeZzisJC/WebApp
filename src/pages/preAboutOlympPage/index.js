import React, { useContext } from "react";
import { FourOlympDiv, MainContainer, MainContainerImage, MainHeadingDiv, NormalTextPreOlymp, OlympiadAvatarDiv, OlympiadAvatarInline, PreAboutOlympInfoPageBody } from "./style";
import { BoldHeading, NormalText } from "../../components/fonts/style";
import { Avatar, IconButton } from "@mui/material";
import { aboutOlympNameContext } from "../../context";
import { TextSection, TextSectionHeader, TextSectionTextContainer } from "../mainPage/style.js"
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

            <TextSection>
                <TextSectionHeader>Как работать с разделом?</TextSectionHeader>
                <TextSectionTextContainer style={{width: '50%'}}>
                    <NormalText style={{color: 'black', fontWeight: 700}}>Выбрите олимпиаду, информацию про которую хотите узнать. Найдите её в списке ниже и кликните по иконке. Внимательно прочитайте представленную информацию. Обращайте внимание на примечания. Посмотрите материалы для подготовки, выберите те, которые подходят вам. Проанализируйте свзяь граничных баллов прошлых лет со сложностью заданий. Так, у вас сложится примерное представление о том, сколько задач вам надо решить для получения диплома. Теперь можете расчитать приблизительное время решения одной задачи (исходя из длительности олимпиады) и начать работать. Удачи!
                    </NormalText>
                </TextSectionTextContainer>
            </TextSection>

            <FourOlympDiv>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Ломоносов'))}>
                    <Avatar src="https://fs02.rchuv.ru/rchuv19/etker/news/2021/10/22/8d203d1c-83cd-4c84-997d-a282aa11a0b6/lomonosov.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalTextPreOlymp>Ломоносов</NormalTextPreOlymp>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Физтех'))}>
                    <Avatar src="https://i.ibb.co/pLHrMzJ/phystech-logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalTextPreOlymp>Физтех</NormalTextPreOlymp>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('ОММО'))}>
                    <Avatar src="https://static.tildacdn.com/tild3732-3731-4566-b832-313962663762/Screenshot_at_Dec_16.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalTextPreOlymp>ОММО</NormalTextPreOlymp>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Покори Воробьёвы Горы'))}>
                    <Avatar src="https://www.stavplus.ru/media/k2/items/cache/a92e06bd757eada1a48b2d09e96a31e5_XL.jpg" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalTextPreOlymp>Покори Воробьёвы Горы</NormalTextPreOlymp>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

            </FourOlympDiv>

            <FourOlympDiv>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Высшая Проба'))}>
                    <Avatar src="https://perseusirk.ru/wp-content/uploads/2022/11/06_VysshayaProba_Style_%D0%97%D0%B0%D0%B3%D0%BB%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B0%D0%B9%D1%82%D0%B0-%D0%BE%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4.jpg" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalTextPreOlymp>Высшая Проба</NormalTextPreOlymp>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('МОШ'))}>
                    <Avatar src={Mosh} sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalTextPreOlymp>МОШ</NormalTextPreOlymp>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Курчатов'))}>
                    <Avatar src="https://olimpiadakurchatov.ru/upload/images/nrcki_logo.png" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalTextPreOlymp>Курчатов</NormalTextPreOlymp>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

                <OlympiadAvatarInline>
                <OlympiadAvatarDiv>
                    <IconButton onClick={() => (HandleChoosingAboutClick('Росатом'))}>
                    <Avatar src="https://top-fon.com/uploads/posts/2023-01/thumbs/1674747822_top-fon-com-p-rosatom-fon-dlya-prezentatsii-63.jpg" sx={{width: '200px', height: '200px', marginBottom: '10px'}}></Avatar>
                    </IconButton>
                    <NormalTextPreOlymp>Росатом</NormalTextPreOlymp>
                </OlympiadAvatarDiv>
                </OlympiadAvatarInline>

            </FourOlympDiv>
        </PreAboutOlympInfoPageBody>
    )
}

export default PreAboutOlympInfoPage;