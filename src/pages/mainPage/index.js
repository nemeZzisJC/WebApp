import React from "react";
import { ShortInfo, LogoDiv, StartButton, MainPageBody, 
    MainPageLogoStyled, MainPageNormalText, MainPageGetStarted, 
    TextSection, TextSectionHeader, TextSectionTextContainer,
    OptionSection, OptionSectionItem, OptionSectionItemText,
    OptionSectionWithHeading,
    OptionSectionHeading,
    GridSection, GridSectionQuestion, GridSectionFirst, GridSectionSecond, 
    GridSectionThird, GridSectionFourth, MonoHeadingElements
} 
from "./style.js";
import { LogoName } from "../../components/logo/style.js"
import { NormalTextMono, MonoHeading, NormalText } from "../../components/fonts/style.js";
import { Link } from "react-router-dom";
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const MainPage = () => {

    return (
        <MainPageBody>
            <MainPageGetStarted>
                <ShortInfo>
                    <LogoDiv>
                        <LogoName>
                            <MainPageLogoStyled></MainPageLogoStyled>
                            MathOlymp
                        </LogoName>
                    </LogoDiv>
                    <MainPageNormalText>Готовься к олимпиадам по математике, получай 100 баллов на ЕГЭ или даже БВИ!</MainPageNormalText>
                    <Link to='/login'><StartButton><NormalText style={{color: 'black', fontWeight: 600}}>Начать учиться</NormalText></StartButton></Link>
                </ShortInfo>
            </MainPageGetStarted>

            <TextSection>
                <TextSectionHeader>Зачем вам олимпиадная математика?</TextSectionHeader>
                <TextSectionTextContainer>
                    <NormalText>Олимпиадная математика тренирует ваш мозг. 
                        Вы учитесь строить логические цепочки, анализировать условие и извлекать из него полезную информацию. 
                        Вы учитесь находить нестандартные решения нетривиальных задач, используя рациональное мышление, что 
                        пригодится вам как на будущей работе, так и в обычной жизни
                    </NormalText>
                </TextSectionTextContainer>
            </TextSection>

            <OptionSectionWithHeading>
                <OptionSectionHeading>Бонусы олимпиадной математики</OptionSectionHeading>
                <OptionSection>
                    <OptionSectionItem>
                        <MoneyRoundedIcon sx={{color: '#01A16C', fontSize: 50}}></MoneyRoundedIcon>
                        <OptionSectionItemText>
                            Получите 100 баллов, став призёром/победителем перечневой олимпиады и не волнуйтесь на ЕГЭ!
                        </OptionSectionItemText>
                    </OptionSectionItem>

                    <OptionSectionItem>
                        <EmojiFlagsRoundedIcon sx={{color: '#01A16C', fontSize: 50}}></EmojiFlagsRoundedIcon>
                        <OptionSectionItemText>
                            Регулярно решайте олимпиадные задачи и поступите в ВУЗ мечты без вступительных испытаний!
                        </OptionSectionItemText>
                    </OptionSectionItem>

                    <OptionSectionItem>
                        <SchoolRoundedIcon sx={{color: '#01A16C', fontSize: 50}}></SchoolRoundedIcon>
                        <OptionSectionItemText>
                            Получайте знания! Решая олимпиадные задачи, вы развиваете творческое, логическое и аналитеское мышление
                        </OptionSectionItemText>
                    </OptionSectionItem>
                </OptionSection>
            </OptionSectionWithHeading>

            <GridSection>
                <GridSectionQuestion>
                    <MonoHeading>Как подготовиться к олимпиадам?</MonoHeading>
                    <DoubleArrowIcon sx={{color:"#01A16C", fontSize: '80px', marginLeft: '8%'}}></DoubleArrowIcon>
                    <NormalTextMono>Как пользоваться MathOlymp для подготовки к олимпиадам</NormalTextMono>
                </GridSectionQuestion>
                <GridSectionFirst>
                    <MonoHeadingElements>1. Выберите олимпиады</MonoHeadingElements>
                    <NormalTextMono>Воспользуйтесь разделом "Об олимпиадах" в меню, чтобы почитать о разных олимпадах. Выберите 2-3 штуки</NormalTextMono>
                </GridSectionFirst>
                <GridSectionSecond>
                    <MonoHeadingElements>2. Посмотрите критерии</MonoHeadingElements>
                    <NormalTextMono>Узнайте критерии определения призёра/победителя прошлых лет. Посмотрите на кол-во задач и время</NormalTextMono>
                </GridSectionSecond>
                <GridSectionThird>
                    <MonoHeadingElements>3. Решайте задачи</MonoHeadingElements>
                    <NormalTextMono>Выберите нужную олимпиаду. Решайте задания прошлых лет. Смотрите подсказки. Следите за временем</NormalTextMono>
                </GridSectionThird>
                <GridSectionFourth>
                    <MonoHeadingElements>4. Разбор полётов</MonoHeadingElements>
                    <NormalTextMono>Следите за ходом мыслей. Как вы дошли до решения? Как могли бы дойти (если не решили)?</NormalTextMono>
                </GridSectionFourth>
            </GridSection>
            

        </MainPageBody>
    );
};

export default MainPage;