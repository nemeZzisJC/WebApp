import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthFormContainer, AuthInput, AuthLabel, AuthLinkButton, AuthPageBody, AuthSubmitButton, AuthHeading } from "../registrationPage/style";
import { LoginForm } from "./style";

export const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [users, setUsers] = useState(null);
    const [loginLink, setLoginLink] = useState('/login');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        let flag = false;
        for (let i = 0; i < users.length; i++) {
            if (email === users[i]['email']) {
                console.log("The user is registered");
                if (pass === users[i]["password"]) {
                    setLoginLink('/tasks')
                    console.log(`Info: base_${users[i]['email']}, mine_${email}, ${loginLink}`);
                    alert("Successfully logged in!");
                    navigate('/tasks')
                } else {
                    setLoginLink('/login')
                    console.log(`Info: ${loginLink}`);
                    alert("Inccorect password!");
                }
                flag = true;
                break;
            }
        }
        if (!flag) {
            setLoginLink('/login');
            console.log(`Info: ${loginLink}`);
            alert("You are not registered!");
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
                    <AuthLabel htmlFor="email">Почта</AuthLabel>
                    <AuthInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your_email@gmail.com" id="email" name="email"></AuthInput>

                    <AuthLabel htmlFor="password">Пароль</AuthLabel>
                    <AuthInput value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"></AuthInput>

                    <AuthSubmitButton type="submit">Войти</AuthSubmitButton>
                    
                    <Link to='/registration'><AuthLinkButton>Нет аккаунта? Зарегистрируйтесь здесь</AuthLinkButton></Link>
                </LoginForm>
            </AuthFormContainer>
        </AuthPageBody>
    );
};

export default LoginPage;