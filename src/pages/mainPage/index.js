import React from "react";
import { ShortInfo, LogoDiv, StartButton, MainPageBody, 
    MainPageLogoStyled, MainPageNormalText, MainPageGetStarted, 
    TextSection, TextSectionHeader, TextSectionTextContainer,
    OptionSection, OptionSectionItem, OptionSectionItemText,
    OptionSectionWithHeading,
    OptionSectionHeading,
    GridSection, GridSectionQuestion, GridSectionFirst, GridSectionSecond, 
    GridSectionThird, GridSectionFourth, GridElementsHeading, MainHeadingDiv, HeadingPartDiv, GetStartedTextSection, GetStartedImageSection, GetStartedTextDiv, GetStartedTextStyle, GetStartedButton
} 
from "./style.js";
import { LogoName } from "../../components/logo/style.js"
import { BoldHeading, GridNormalText, GridSectionMainHeading, NormalText, PoppinsNormalText, PoppinsUpperCase } from "../../components/fonts/style.js";
import { Link, useNavigate } from "react-router-dom";
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useContext } from "react";
import { isLoggedInContext } from "../../context/index.js";
import Footer from "../../components/footer/index.js";
import Header from "../../components/header/index.js";


const MainPage = () => {

    const navigate = useNavigate();

    const {
        isLoggedIn, setIsLoggedIn
      } = useContext(isLoggedInContext);

    const HandleStartButtonClick = () => {
        console.log('isLoggedIn inside mainPage:', isLoggedIn);
        if (isLoggedIn === 1) {
            navigate('/chooseOlymp');
        } else {
            navigate('/login');
        }
    }

    return (
        <MainPageBody>
            <Header/>
            <MainPageGetStarted>
                <GetStartedTextSection>
                <MainHeadingDiv>
                    <HeadingPartDiv style={{justifyContent: 'left'}}>
                        <BoldHeading>Math</BoldHeading>
                    </HeadingPartDiv>
                    <HeadingPartDiv style={{justifyContent: 'right'}}>
                        <BoldHeading>Olymp</BoldHeading>
                    </HeadingPartDiv>
                </MainHeadingDiv>

                <GetStartedTextDiv>
                    <GetStartedTextStyle>Готовься к олмпиадам по математике, получай 100 баллов на ЕГЭ или даже БВИ!</GetStartedTextStyle>
                </GetStartedTextDiv>

                <GetStartedButton onClick={HandleStartButtonClick}>
                    Начать учиться
                </GetStartedButton>
                </GetStartedTextSection>

                <GetStartedImageSection src="https://mathsolymp.my.canva.site/company-website-business-website-in-violet-dark-blue-neon-pink-gradient-tech-style/images/b20a719a1bcd3cb1ff0ad4286cf9fb5e.svg"></GetStartedImageSection>

            </MainPageGetStarted>

            <TextSection>
                <TextSectionHeader>Зачем вам олимпиадная математика?</TextSectionHeader>
                <TextSectionTextContainer>
                    <NormalText style={{color: 'black', fontWeight: 700}}>Олимпиадная математика тренирует ваш мозг. 
                        Вы учитесь строить логические цепочки, анализировать условие и извлекать из него полезную информацию. 
                        Вы учитесь находить нестандартные решения нетривиальных задач, комбинируя творческое и рациональное мышление, что 
                        пригодится вам как на будущей работе, так и в обычной жизни. К тому же, даже если вы не выиграете олимпиаду, вы получите глубокое понимание математики
                    </NormalText>
                </TextSectionTextContainer>
            </TextSection>

            <OptionSectionWithHeading>
                <OptionSectionHeading>Бонусы олимпиадной математики</OptionSectionHeading>
                <OptionSection>
                    <OptionSectionItem>
                        <MoneyRoundedIcon sx={{color: '#23AF7B', fontSize: 50}}></MoneyRoundedIcon>
                        <OptionSectionItemText>
                            Получите 100 баллов, став призёром/победителем перечневой олимпиады и не волнуйтесь на ЕГЭ!
                        </OptionSectionItemText>
                    </OptionSectionItem>

                    <OptionSectionItem>
                        <EmojiFlagsRoundedIcon sx={{color: '#23AF7B', fontSize: 50}}></EmojiFlagsRoundedIcon>
                        <OptionSectionItemText>
                            Регулярно решайте олимпиадные задачи и поступите в ВУЗ мечты без вступительных испытаний!
                        </OptionSectionItemText>
                    </OptionSectionItem>

                    <OptionSectionItem>
                        <SchoolRoundedIcon sx={{color: '#23AF7B', fontSize: 50}}></SchoolRoundedIcon>
                        <OptionSectionItemText>
                            Получайте знания! Решая олимпиадные задачи, вы развиваете творческое, логическое и аналитеское мышление
                        </OptionSectionItemText>
                    </OptionSectionItem>
                </OptionSection>
            </OptionSectionWithHeading>

            <GridSection>
                <GridSectionQuestion>
                    <GridSectionMainHeading>Как подготовиться к олимпиадам?</GridSectionMainHeading>
                    <DoubleArrowIcon sx={{color:"#23AF7B", fontSize: '80px', marginLeft: '8%'}}></DoubleArrowIcon>
                    <GridNormalText style={{color: 'white'}}>Как пользоваться MathOlymp для подготовки к олимпиадам</GridNormalText>
                </GridSectionQuestion>
                <GridSectionFirst>
                    <GridElementsHeading>1. Выберите олимпиады</GridElementsHeading>
                    <GridNormalText>Воспользуйтесь разделом "Об олимпиадах" в меню, чтобы почитать о разных олимпадах. Выберите несколько</GridNormalText>
                </GridSectionFirst>
                <GridSectionSecond>
                    <GridElementsHeading>2. Посмотрите критерии</GridElementsHeading>
                    <GridNormalText>Узнайте критерии определения призёра/победителя прошлых лет. Посмотрите на кол-во задач и время</GridNormalText>
                </GridSectionSecond>
                <GridSectionThird>
                    <GridElementsHeading>3. Решайте задачи</GridElementsHeading>
                    <GridNormalText>Выберите нужную олимпиаду. Решайте задания прошлых лет. Смотрите подсказки. Следите за временем</GridNormalText>
                </GridSectionThird>
                <GridSectionFourth>
                    <GridElementsHeading>4. Разбор полётов</GridElementsHeading>
                    <GridNormalText>Следите за ходом мыслей. Как вы дошли до решения? Как могли бы дойти (если не решили)?</GridNormalText>
                </GridSectionFourth>
            </GridSection>

            <Footer/>

        </MainPageBody>
    );
};

export default MainPage;