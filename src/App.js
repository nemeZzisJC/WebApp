import React, { useState, useEffect, createContext } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/mainPage"
import RegistrationPage from "./pages/registrationPage";
import LoginPage from "./pages/loginPage";
import ChooseClassPage from "./pages/chooseClassPage";
import ChooseOlympPage from "./pages/chooseOlympPage";
import ChooseYearPage from "./pages/chooseYearPage";
import SolveTaskPage from "./pages/solveTaskPage";
import ChooseStagePage from "./pages/chooseStagePage";

export const OlympContext = createContext({});

const App = () => {

  const [olympName, setOlympName] = useState('');
  const [grade, setGrade] = useState('');
  const [year, setYear] = useState('');
  const [stage, setStage] = useState('');
  const [taskNumber, setTaskNumber] = useState('');

  const OlympContextValue = {
    olympName, setOlympName,
    grade, setGrade,
    year, setYear,
    stage, setStage,
    taskNumber, setTaskNumber
  };

  return (
    <>
      <BrowserRouter>
        <Header/>

        <OlympContext.Provider value={OlympContextValue}>
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
          <Route  path='/chooseOlymp' element={
            <ChooseOlympPage/>
          }
          />
          <Route path='/chooseClass' element={
              <ChooseClassPage/>
          }/>
          <Route path='/chooseYear' element={
            <ChooseYearPage/>
          }/>
          <Route path='/solveTask' element={
            <SolveTaskPage/>
          }
          />
          <Route path="/chooseStage" element={
            <ChooseStagePage/>
          }/>
        </Routes>
        </OlympContext.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;
