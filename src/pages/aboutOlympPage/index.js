import React from "react";
import olympData from "../../aboutOlympData.json";
import { AboutInfoContainer, AboutInfoHeading, AboutInfoHeadingImage, AboutInfoImage, AboutInfoTextContainer, AboutOlympPageBody } from "./style";
import { Heading, NormalText } from "../../components/fonts/style";
import { AttentionText, HeadingAndIcon, PreLinkText, TextSectionContainer, TextSectionLink, TextSectionList, TextSectionText } from "../../components/textSections/style";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FlakyRoundedIcon from '@mui/icons-material/FlakyRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';

const displayAboutOlympPage = () => {
    let content = [];
    const olympName = "Физтех";
    const olympComponents = olympData[olympName];

    console.log(olympComponents);

    for (let i = 0; i < olympComponents.length; ++i) {
        let curComponent = olympComponents[i];

        // displaying info about the olympiad
        if (curComponent.id === 1) {
            const aboutInfo = curComponent["aboutInfo"];
            const imageWidth = aboutInfo["imageWidth"];
            content.push(
                <AboutInfoContainer>
                    <AboutInfoHeadingImage>
                        <AboutInfoHeading>{olympName}</AboutInfoHeading>
                        <AboutInfoImage src={aboutInfo["aboutInfoImage"]} style={{width: `${imageWidth}`}}/>
                    </AboutInfoHeadingImage>
                    <AboutInfoTextContainer>
                        <NormalText>{aboutInfo["aboutInfoText"]}</NormalText>
                    </AboutInfoTextContainer>
                </AboutInfoContainer>
            )
        }

        // displaying info about registration
        if (curComponent.id === 2) {
            const registrationInfo = curComponent["registrationInfo"];
            const regLink = registrationInfo["registrationLink"];
            const regText = registrationInfo["registrationText"];
            const regLinkText = `${olympName} регистрация`;
            content.push(
                <TextSectionContainer style={{backgroundColor: "silver"}}>
                    <HeadingAndIcon>
                        <AccountCircleRoundedIcon sx={{fontSize: 40, color: "rgb(1, 161, 108)", marginRight: "10px"}}></AccountCircleRoundedIcon><Heading>Регистрация</Heading>
                    </HeadingAndIcon>

                    <TextSectionText>
                        <NormalText>{regText}</NormalText>
                    </TextSectionText>

                    <TextSectionText>
                        <PreLinkText>Ссылка на регистрацию: <TextSectionLink href={regLink}>{regLinkText}</TextSectionLink></PreLinkText>
                    </TextSectionText>
                </TextSectionContainer>
            )
        }

        // displaying info about qualification round
        if (curComponent.id === 3) {
            const qualInfo = curComponent["qualInfo"];
            const qualText = qualInfo["qualInfoText"];
            let hasList = false;
            let itemsList;
            console.log(qualInfo["qualInfoListItems"].length);

            if (qualInfo["qualInfoListItems"]) {
                hasList = true;
                itemsList = qualInfo["qualInfoListItems"];
                console.log(`Item list: ${itemsList}`);
            }

            console.log(`hasList: ${hasList}`)

            content.push(
                <TextSectionContainer style={{backgroundColor: "lightGray"}}>
                    <HeadingAndIcon>
                        <FlakyRoundedIcon sx={{fontSize: 40, color: "rgb(1, 161, 108)", marginRight: "10px"}}></FlakyRoundedIcon><Heading>Отоборочный этап</Heading>
                    </HeadingAndIcon>

                    <TextSectionText>
                        <NormalText>{qualText}</NormalText>
                    </TextSectionText>
                    
                    {hasList ? 
                    <TextSectionList>
                    {itemsList.map((value, index) => (
                        <NormalText>{index + 1}. {value}</NormalText>
                        ))}
                    </TextSectionList>: null }

                </TextSectionContainer>
            )
        }

        // displaying info about final round
        if (curComponent.id === 4) {
            const finalInfo = curComponent["finalInfo"];
            const finalText = finalInfo["finalInfoText"];
            const finalAttention = finalInfo["finalInfoAttention"];
            content.push(
                <TextSectionContainer style={{backgroundColor: "silver"}}>
                    <HeadingAndIcon>
                        <WorkspacePremiumRoundedIcon sx={{fontSize: 40, color: "rgb(1, 161, 108)", marginRight: "10px"}}></WorkspacePremiumRoundedIcon><Heading>Заключительный этап</Heading>
                    </HeadingAndIcon>

                    <TextSectionText>
                        <NormalText>{finalText}</NormalText>
                    </TextSectionText>

                    <TextSectionText>
                        <AttentionText>{finalAttention}</AttentionText>
                    </TextSectionText>
                </TextSectionContainer>
            )
        }
    }
    return content;
}

const AboutOlympPage = () => {
    return(
        <AboutOlympPageBody>
            {displayAboutOlympPage()}
        </AboutOlympPageBody>
    );
}

export default AboutOlympPage;