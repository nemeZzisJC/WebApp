import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthFormContainer, AuthInput, AuthLabel, AuthLinkButton, AuthPageBody, AuthSubmitButton, AuthHeading } from "../registrationPage/style";
import { LoginForm } from "./style";

export const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [users, setUsers] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        let flag = false;
        for (let i = 0; i < users.length; i++) {
            if (email == users[i]['email']) {
                console.log("The user is registered");
                flag = true; 
            }
        }
        if (!flag) {
            console.log("The user isn't registered");
        }
    };

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((res) => {
                return (res.json());
            })
            .then((data) => {setUsers(data); console.log(data);})
            .catch((err) => {console.error(err)})
    }, [])

    return(
        <AuthPageBody>
            <AuthFormContainer>
                <AuthHeading>Login</AuthHeading>
                <LoginForm onSubmit={handleSubmit}>
                    <AuthLabel htmlFor="email">Email</AuthLabel>
                    <AuthInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your_email@gmail.com" id="email" name="email"></AuthInput>

                    <AuthLabel htmlFor="password">Password</AuthLabel>
                    <AuthInput value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"></AuthInput>

                    <AuthSubmitButton type="submit">Login</AuthSubmitButton>
                    <Link to='/registration'><AuthLinkButton>Don't have an account? Register here</AuthLinkButton></Link>
                </LoginForm>
            </AuthFormContainer>
        </AuthPageBody>
    );
};

export default LoginPage;