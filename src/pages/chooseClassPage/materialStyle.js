import React from "react";
import Card from "@mui/material/Card";
import Slider from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';

const ClassCard = styled(Card)(({theme}) => ({
    width: '20vw',
    height:  '35vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    boxShadow: '0px 5px rgb(150, 150, 150)',
    '&:hover': {
        backgroundColor: 'rgb(200, 200, 200)',
        boxShadow: '0px 5px rgb(70, 70, 70)'
    },
}));

export default ClassCard;