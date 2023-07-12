import React, { useState, useEffect, createContext, useContext } from "react";
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
import AboutOlympPage from "./pages/aboutOlympPage";
import { OlympContext, isLoggedInContext } from "./context/index.js";
import { usePersistentState } from "./hooks/usePersistentState.js";

const App = () => {

  // OlympContext
  const [olympName, setOlympName] = usePersistentState('olympName', '');
  const [grade, setGrade] = usePersistentState('grade', '');
  const [year, setYear] = usePersistentState('year', '');
  const [stage, setStage] = usePersistentState('stage', '');

  const OlympContextValue = {
    olympName, setOlympName,
    grade, setGrade,
    year, setYear,
    stage, setStage
  };

  // isLoggedInContext
  const [isLoggedIn, setIsLoggedIn] = usePersistentState("isLoggedIn", 0);

  const IsLoggedInValue = {
    isLoggedIn, setIsLoggedIn
  };

  return (
    <>
      <BrowserRouter>
        <OlympContext.Provider value={OlympContextValue}>
        <isLoggedInContext.Provider value={IsLoggedInValue}>
        <Header/>
        </isLoggedInContext.Provider>
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
            <isLoggedInContext.Provider value={IsLoggedInValue}>
              <LoginPage/>
            </isLoggedInContext.Provider>
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
          <Route path='/aboutOlymp' id='aboutOlymp' element={
            <AboutOlympPage/>
          }/>
        </Routes>
        </OlympContext.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;
