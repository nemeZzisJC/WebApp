import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Footer from "./components/footer";
import Header from "./components/header";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/mainPage"
import RegistrationPage from "./pages/registrationPage";
import LoginPage from "./pages/loginPage";
import ChooseClassPage from "./pages/chooseClassPage";
import TasksPage from "./pages/tasksPage";

const App = () => {

  const [userInput, setUserInput] = useState("Input");
  const [inputButton, setInputButton] = useState(false);
  const [state, setState] = useState(false);

  const handleOnChangeInput = (event) => {
    setUserInput(event.target.value);
    console.log(event.target.value);
  }

  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={
            <MainPage/>
          }/>
          <Route path='/footer' element={
            <Footer/>
          }/>
          <Route path='/registration' element={
            <RegistrationPage/>
          }/>
          <Route path='/login' element={
            <LoginPage/>
          }/>
          <Route path='/chooseClass' element={
            <ChooseClassPage/>
          }/>
          <Route path='/tasks' element={
            <TasksPage/>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
