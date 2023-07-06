import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthPageBody, AuthFormContainer, RegisterForm, AuthLabel, AuthInput, AuthLinkButton, AuthSubmitButton, AuthHeading } from "./style";

const RegistrationPage = () => {

    const [reg_email, setReg_email] = useState('');
    const [reg_pass, setReg_Pass] = useState('');
    const [reg_username, setReg_username] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(reg_email);
        console.log()
    };

    return(
        <AuthPageBody>
            <AuthFormContainer>
                <AuthHeading>Register</AuthHeading>
                <RegisterForm onSubmit={handleSubmit}>
                    <AuthLabel htmlFor="reg_username">Username</AuthLabel>
                    <AuthInput value={reg_username} onChange={(u) => setReg_username(u.target.value)} type="text" placeholder="username" id="reg_username" name="reg_username"></AuthInput>

                    <AuthLabel htmlFor="reg_email">Email</AuthLabel>
                    <AuthInput value={reg_email} onChange={(e) => setReg_email(e.target.value)} type="email" placeholder="your_email@gmail.com" id="reg_email" name="reg_email"></AuthInput>

                    <AuthLabel htmlFor="reg_pass">Password</AuthLabel>
                    <AuthInput value={reg_pass} onChange={(p) => setReg_Pass(p.target.value)} type="password" placeholder="*********" id="password" name="password"></AuthInput>

                    <AuthSubmitButton type="submit">Register</AuthSubmitButton>
                </RegisterForm>
                <Link to='/login'><AuthLinkButton>Already have an account? Login here</AuthLinkButton></Link>
            </AuthFormContainer>
        </AuthPageBody>
    );
};

export default RegistrationPage;