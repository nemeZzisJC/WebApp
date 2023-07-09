import React from "react";
import Card from "@mui/material/Card";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const ClassCard = styled(Card)(({theme}) => ({
    width: '20%',
    height:  '45vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#F3F5F8',
    boxShadow: '5px 4px rgb(199, 201, 204)',
    border: '0.1px solid rgb(150, 150, 150)',
    '&:hover': {
        cursor: 'pointer',
        color: "rgb(1, 161, 108)",
        backgroundColor: "",
        border: '2.5px solid rgb(1, 161, 108)',
        boxShadow: '5px 4px rgb(188, 190, 193)'
    },
}));

export default ClassCard;