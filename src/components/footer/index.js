import React from "react";
import { AuthFormContainer, AuthInput, AuthLabel, AuthPageBody, AuthSubmitButton, AuthHeading } from "../../pages/registrationPage/style.js";
import { ContactUsForm, ContainerImage } from "./style";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

    // ALERT
    const successfullContactUs = (username) => {
        toast.success(`Ваше сообщение отправлено, ${username}`, {position: toast.POSITION.TOP_RIGHT, 
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined
        });
    }

    const emptyFieldWarningMessage = () => {
        toast.error(`Все поля должны быть заполнены!`,
        {position: toast.POSITION.TOP_RIGHT, 
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined
        })
    }


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const HandleSubmit = (event) => {
        event.preventDefault();

        if (!username || !email || !message) {
            emptyFieldWarningMessage();
        } else {
            successfullContactUs(username);
        }

        setMessage("");
        setEmail("");
        setUsername("");
    }

    return (
        <AuthPageBody style={{backgroundImage: 'none', backgroundColor: 'black', minHeight: '100vh', justifyContent: 'right'}}>
            <ContainerImage src="https://mathsolymp.my.canva.site/company-website-business-website-in-violet-dark-blue-neon-pink-gradient-tech-style/images/c469398c395986646ac0e18a8ec6b919.svg"></ContainerImage>
            <AuthFormContainer style={{width: '25vw', border: '1.5px solid white', marginRight: '13vw'}}>
                <AuthHeading style={{color: 'white'}}>Contact us</AuthHeading>
                <ContactUsForm onSubmit={HandleSubmit}>

                    <AuthLabel htmlFor="username" style={{color: "white"}}>Ваше имя</AuthLabel>
                    <AuthInput value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="your_name" id="contact_us_username" name="username"></AuthInput>

                    <AuthLabel htmlFor="email" style={{color: "white"}}>Почта</AuthLabel>
                    <AuthInput value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="your_email@gmail.com" id="contact_us_email" name="email"></AuthInput>

                    <AuthLabel htmlFor="message" style={{color: "white"}} aria-multiline='true'>Сообщение</AuthLabel>
                    <AuthInput value={message} onChange={(e) => {setMessage(e.target.value)}} type="text" placeholder="your_message" id="contact_us_message" name="message"></AuthInput>

                    <AuthSubmitButton type="submit" style={{fontWeight: 800, fontSize: 17, marginBottom: '5vh', border: 'none',backgroundColor: "#189967", marginTop: "30px",padding: "20px", borderRadius: "10px", cursor: "pointer", boxShadow: "3px 3.5px #106645"}}>Отправить</AuthSubmitButton>
                    <ToastContainer/>
                    
                </ContactUsForm>
            </AuthFormContainer>
        </AuthPageBody>
    );
};

export default Footer;