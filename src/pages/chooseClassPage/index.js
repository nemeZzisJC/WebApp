import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Heading } from "../../components/fonts/style";
import { ChooseClassPageContainer, ChoosePageBody } from "./style.js";
import ClassCard from "./materialStyle";

const ChooseClassPage = () => {
    return (
        <ChoosePageBody>
            <Heading>Выберите класс</Heading>
            <ChooseClassPageContainer>
                <ClassCard>
                    <Heading style={{fontSize: 100}}>
                    9
                    </Heading>
                </ClassCard>

                <ClassCard>
                    <Heading style={{fontSize: 100}}>
                    10
                    </Heading>
                </ClassCard>

                <ClassCard>
                    <Heading style={{fontSize: 100}}>
                    11
                    </Heading>
                </ClassCard>
            </ChooseClassPageContainer>
        </ChoosePageBody>
    );
};

export default ChooseClassPage;