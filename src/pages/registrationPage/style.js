import styled from "styled-components"
import { Link } from "react-router-dom"

export const AuthPageBody = styled.div`
    text-align: center;
    min-height: 100vh;
    min-width: 100wh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80');
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
    border: none;
    font-family: 'Montserrat';
    font-weight: 600;
    background-color: #01A16C;
    margin-top: 30px;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 3.5px rgb(1, 127, 85);
`

export const AuthLinkButton = styled.button`
    border: none;
    font-family: 'Montserrat';
    background: none;
    padding: 20px;
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