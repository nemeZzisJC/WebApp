import styled from "styled-components"
import Back from '../mainPage/back4.png'

export const AuthPageBody = styled.div`
    text-align: center;
    min-height: 100vh;
    min-width: 100wh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Back});
    background-size: cover;
`

export const AuthFormContainer = styled.div`
    padding: 2rem 5rem 2rem 5rem;
    display: flex;
    flex-direction: column;
    border: 1.5px solid black;
    border-radius: 10px;
`

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const AuthLabel = styled.label`
    text-align: left;
    padding: 4px 0px;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 17;
`

export const AuthInput = styled.input`
    margin: 8px 0px;
    font-family: 'Montserrat';
    font-size: 16px;
    border-radius: 10px;
    border: 2px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
`

export const AuthSubmitButton = styled.button`
    padding: 1rem 3rem;
    border: 2px solid black;
    border-radius: 30px;
    background-color: black;
    margin-top: 30px;
    
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.6;
    text-transform: uppercase;
    color: white;

    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`

export const AuthLinkButton = styled.button`
    border: none;
    font-family: 'Montserrat';
    font-weight: 600;
    background: none;
    padding: 25px;
    border-radius: 10px;
    text-decoration: underline;
    cursor: pointer;
`

export const AuthHeading = styled.h2`
    margin-top: 0px;
    font-family: 'Kaushan Script', cursive;
    font-size: 40px;
    font-weight: 700;
`