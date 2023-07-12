import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthFormContainer, AuthInput, AuthLabel, AuthLinkButton, AuthPageBody, AuthSubmitButton, AuthHeading } from "../registrationPage/style";
import { LoginForm } from "./style";
import { isLoggedInContext } from "../../context/index.js";

export const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [users, setUsers] = useState(null);

    // state that tracks logged in property of the user; Because only logged in users can see tasks
    const {
      isLoggedIn, setIsLoggedIn
    } = useContext(isLoggedInContext);

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((res) => {
                return (res.json());
            })
            .then((data) => {setUsers(data); console.log(data);})
            .catch((err) => {console.error(err)})
    }, [])

    function updateUserLoggedInStatus(email) {
        const url = `http://localhost:3001/users?email=${email}`;
      
        // Send a GET request to find the user by email and username
        fetch(url)
          .then(response => response.json())
          .then(users => {
            if (users.length > 0) {
              const user = users[0];
              user.isLoggedIn = 1;
      
              // Send a PATCH request to update the user's isLoggedIn status
              fetch(`http://localhost:3001/users/${user.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
              })
                .then(response => {
                  if (response.ok) {
                    console.log("User isLoggedIn prop updated successfully.");
                    // Perform any additional actions if needed
                  } else {
                    console.error("Failed to update isLoggedIn prop for this user.");
                    // Handle the error case
                  }
                })
                .catch(error => {
                  console.error("An error occurred:", error);
                  // Handle any network or other errors
                });
            } else {
              console.error("User not found.");
              // Handle the case when the user is not found
            }
          })
          .catch(error => {
            console.error("An error occurred:", error);
            // Handle any network or other errors
          });
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        let flag = false;
        for (let i = 0; i < users.length; i++) {
            if (email === users[i]['email']) {
                console.log("The user is registered");
                if (pass === users[i]["password"]) {
                    console.log(`Info: base_${users[i]['email']}, mine_${email}`);
                    setIsLoggedIn(1);
                    console.log(isLoggedIn);
                    updateUserLoggedInStatus(email);
                    alert("Successfully logged in!");
                    navigate('/chooseOlymp')
                } else {
                    alert("Inccorect password!");
                }
                flag = true;
                break;
            }
        }
        if (!flag) {
            alert("You are not registered!");
        }
    };

    return(
        <AuthPageBody>
            <AuthFormContainer>
                <AuthHeading>Login</AuthHeading>
                <LoginForm onSubmit={handleSubmit}>
                    <AuthLabel htmlFor="email">Почта</AuthLabel>
                    <AuthInput value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="your_email@gmail.com" id="email" name="email"></AuthInput>

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