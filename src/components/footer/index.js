import React from "react";
import { AuthFormContainer, AuthInput, AuthLabel, AuthPageBody, AuthSubmitButton, AuthHeading } from "../../pages/registrationPage/style.js";
import { ContactUsForm } from "./style";
import { useState } from "react";

const Footer = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    return (
        <AuthPageBody style={{backgroundImage: 'none', backgroundColor: 'lightGrey', minHeight: '100vh'}}>
            <AuthFormContainer style={{width: '25vw'}}>
                <AuthHeading>Contact us</AuthHeading>
                <ContactUsForm>

                    <AuthLabel htmlFor="username">Ваше имя</AuthLabel>
                    <AuthInput value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="your_name" id="contact_us_username" name="username"></AuthInput>

                    <AuthLabel htmlFor="email">Почта</AuthLabel>
                    <AuthInput value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="your_email@gmail.com" id="contact_us_email" name="email"></AuthInput>

                    <AuthLabel htmlFor="message">Сообщение</AuthLabel>
                    <AuthInput value={message} onChange={(e) => {setMessage(e.target.value)}} type="text" placeholder="your_message" id="contact_us_message" name="message"></AuthInput>

                    <AuthSubmitButton type="submit">Отправить</AuthSubmitButton>
                    
                </ContactUsForm>
            </AuthFormContainer>
        </AuthPageBody>
    );
};

export default Footer;