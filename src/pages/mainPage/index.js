import React from "react";
import { ShortInfo, LogoDiv, StartButton, MainPageBody, MainPageLogoStyled, MainPageNormalText } from "./style.js";
import { LogoName } from "../../components/logo/style.js"
import { NormalText } from "../../components/fonts/style.js";
import { Link } from "react-router-dom";

const MainPage = () => {

    return (
        <MainPageBody>
            <ShortInfo>
                <LogoDiv>
                    <LogoName>
                        <MainPageLogoStyled></MainPageLogoStyled>
                        MathOlymp
                    </LogoName>
                </LogoDiv>
                <MainPageNormalText>Готовься к олимпиадам по математике, получай 100 баллов на ЕГЭ или даже БВИ!</MainPageNormalText>
                <Link to='/login'><StartButton><NormalText>Начать учиться</NormalText></StartButton></Link>
            </ShortInfo>
        </MainPageBody>
    );
};

export default MainPage;