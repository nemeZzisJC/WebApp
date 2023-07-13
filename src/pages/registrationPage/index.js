import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthPageBody, AuthFormContainer, RegisterForm, AuthLabel, AuthInput, AuthLinkButton, AuthSubmitButton, AuthHeading } from "./style";
import Header from "../../components/header";

const RegistrationPage = () => {

    const navigation = useNavigate();

    const [] = useState();
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(0);

    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((res) => {
                return (res.json());
            })
            .then((data) => {setUsers(data); console.log(data);})
            .catch((err) => {console.error(err)})
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let formData = {
            username: username,
            email: email,
            password: password,
            isLoggedIn: isLoggedIn
        }

        if (!formData.username || !formData.email || !formData.password) {
            alert("Все поля должны быть заполнены!")
        } else {
            for (let i = 0; i < users.length; ++i) {
                if (formData['email'] === users[i]['email']) {
                    alert("Пользователь с данной почтой уже существует!");
                    return;
                }
                if (formData['username'] === users[i]['username']) {
                    alert("Пользователь с данным именем уже существует!");
                    return;
                }
            }
            fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });

            alert('Вы успешно зарегистрировались!');

            navigation('/login');
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return(
        <AuthPageBody>
            <Header/>
            <AuthFormContainer>
                <AuthHeading>Register</AuthHeading>
                <RegisterForm onSubmit={handleSubmit}>
                    <AuthLabel htmlFor="username">Имя пользователя</AuthLabel>
                    <AuthInput value={username} onChange={handleUsernameChange} type="text" placeholder="username" name="username"></AuthInput>

                    <AuthLabel htmlFor="email">Почта</AuthLabel>
                    <AuthInput value={email} onChange={handleEmailChange} type="email" placeholder="your_email@gmail.com" name="email"></AuthInput>

                    <AuthLabel htmlFor="password">Пароль</AuthLabel>
                    <AuthInput value={password} onChange={handlePasswordChange} type="password" placeholder="*********" name="password"></AuthInput>

                    <AuthSubmitButton type="submit">Зарегистрироваться</AuthSubmitButton>
                </RegisterForm>
                <Link to='/login'><AuthLinkButton>Уже есть аккаунт? Авторизуйтесь здесь</AuthLinkButton></Link>
            </AuthFormContainer>
        </AuthPageBody>
    );
};

export default RegistrationPage;