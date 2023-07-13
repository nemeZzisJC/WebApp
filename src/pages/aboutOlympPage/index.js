import React from "react";
import olympData from "../../aboutOlympData.json";
import { AboutInfoContainer, AboutInfoHeading, AboutInfoHeadingImage, AboutInfoImage, AboutInfoTextContainer, AboutOlympPageBody } from "./style";
import { Heading, NormalText } from "../../components/fonts/style";
import { AttentionText, HeadingAndIcon, PreLinkText, TextSectionContainer, TextSectionLink, TextSectionInnerList, TextSectionText } from "../../components/textSections/style";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FlakyRoundedIcon from '@mui/icons-material/FlakyRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import StackedLineChartRoundedIcon from '@mui/icons-material/StackedLineChartRounded';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext } from "react";
import { aboutOlympNameContext } from "../../context/index.js";
import BlackHeader from "../../components/blackHeader";


const displayAboutOlympPage = (olName) => {
    let content = [];
    const olympName = olName;
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
                        <NormalText style={{fontSize: 18}}>{aboutInfo["aboutInfoText"]}</NormalText>
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
                <TextSectionContainer style={{backgroundColor: "#B0FFE2"}}>
                    <HeadingAndIcon>
                        <AccountCircleRoundedIcon sx={{fontSize: 40, color: "black", marginRight: "10px"}}></AccountCircleRoundedIcon><Heading style={{color: "black"}}>Регистрация</Heading>
                    </HeadingAndIcon>

                    <TextSectionText>
                        <NormalText style={{color: 'black'}}>{regText}</NormalText>
                    </TextSectionText>

                    <TextSectionText>
                        <PreLinkText style={{color: 'black'}}>Ссылка на регистрацию: <TextSectionLink target="_blank" href={regLink}>{regLinkText}</TextSectionLink></PreLinkText>
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
                <TextSectionContainer style={{backgroundColor: "#82FFCB"}}>
                    <HeadingAndIcon>
                        <FlakyRoundedIcon sx={{fontSize: 40, color: "black", marginRight: "10px"}}></FlakyRoundedIcon><Heading>Отоборочный этап</Heading>
                    </HeadingAndIcon>

                    <TextSectionText>
                        <NormalText>{qualText}</NormalText>
                    </TextSectionText>
                    
                    {hasList ? 
                    <TextSectionInnerList>
                    {itemsList.map((value, index) => (
                        <NormalText>{index + 1}. {value}</NormalText>
                        ))}
                    </TextSectionInnerList>: null }

                </TextSectionContainer>
            )
        }

        // displaying info about final round
        if (curComponent.id === 4) {
            const finalInfo = curComponent["finalInfo"];
            const finalText = finalInfo["finalInfoText"];
            const finalAttention = finalInfo["finalInfoAttention"];
            content.push(
                <TextSectionContainer style={{backgroundColor: "#1DCD8D"}}>
                    <HeadingAndIcon>
                        <WorkspacePremiumRoundedIcon sx={{fontSize: 40}}></WorkspacePremiumRoundedIcon><Heading>Заключительный этап</Heading>
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

        // displaying preparation materials

        if (curComponent.id === 5) {
            const materialInfo = curComponent["preparationInfo"];
            const textItems = materialInfo["preparationTextItems"];
            const linkItems = materialInfo["preparationLinkItems"];

            content.push(
                <TextSectionContainer style={{backgroundColor: "#23AF7B"}}>
                    <HeadingAndIcon>
                        <MenuBookRoundedIcon sx={{fontSize: 40, marginRight: "10px"}}></MenuBookRoundedIcon><Heading>Материалы для подготовки</Heading>
                    </HeadingAndIcon>
                    
                    {
                        textItems.map((value, index) => (
                            <TextSectionText>
                                <NormalText style={{marginBottom: "3vh"}}><TextSectionLink href={linkItems[index]} target="_blank">{index + 1}. {value[0]}</TextSectionLink></NormalText>
                                <NormalText style={{marginLeft: "2vw", color: "black"}}>{value[1]}</NormalText>
                            </TextSectionText>
                        ))
                    }

                </TextSectionContainer>
            )
        }

        // displaying bounary scores for olymp
        if (curComponent.id === 6) {
            const boundaryScoresInfo = curComponent["boundaryScoresInfo"];
            const boundaryTables = boundaryScoresInfo["tables"];
            const boundaryText = boundaryScoresInfo["preTableText"];

            // adding a table 
            content.push(
                <TextSectionContainer style={{paddingLeft: "5vw", paddingRight: "5vw", paddingTop: "10vh", backgroundColor: "#197956"}}>
                    <HeadingAndIcon>
                        <StackedLineChartRoundedIcon sx={{fontSize: 40, color: "white", marginRight: "10px"}}></StackedLineChartRoundedIcon><Heading style={{color: "white"}}>Граничные баллы</Heading>
                    </HeadingAndIcon>

                    {
                        boundaryText.map((value) => (
                            <TextSectionText>
                                <NormalText style={{color: "white"}}>{value}</NormalText>
                            </TextSectionText>
                        ))
                    }

                </TextSectionContainer>
            )
            for (let i = 0; i < boundaryTables.length; i++) {
                const rows = boundaryTables[i]["rowsData"];

                content.push(
                    <TextSectionContainer style={{padding: '10vh 5vw', backgroundColor: "#104c36"}}>
                    <Heading style={{marginBottom: '3vh', color: 'white'}}>{boundaryTables[i]["dataHeading"]}</Heading>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{color: 'white', fontWeight: 800}} align="center">Год</TableCell>
                                    <TableCell sx={{color: 'white', fontWeight: 800}}align="center">Призёр 3 степени</TableCell>
                                    <TableCell sx={{color: 'white', fontWeight: 800}}align="center">Призёр 2 степени</TableCell>
                                    <TableCell sx={{color: 'white', fontWeight: 800}}align="center">Призёр 1 степени</TableCell>
                                    <TableCell sx={{color: 'white', fontWeight: 800}} align="center">Общее кол-во баллов</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell sx={{color: 'white'}} align="center">{row[0]}</TableCell>
                                    <TableCell sx={{color: 'white'}} align="center">{row[1]}</TableCell>
                                    <TableCell sx={{color: 'white'}} align="center">{row[2]}</TableCell>
                                    <TableCell sx={{color: 'white'}} align="center">{row[3]}</TableCell>
                                    <TableCell sx={{color: 'white'}} align="center">{row[4]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </TextSectionContainer>
                )
            }
        }
        
    }
    return content;
}

const AboutOlympPage = () => {

    const {
        aboutOlympName, setAboutOlympName
    } = useContext(aboutOlympNameContext); 

    return(
        <AboutOlympPageBody>
            <BlackHeader/>
            {displayAboutOlympPage(aboutOlympName)}
        </AboutOlympPageBody>
    );
}

export default AboutOlympPage;