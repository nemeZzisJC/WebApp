import React, { useState, useEffect, createContext, useContext } from "react";
import Footer from "./components/footer";
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
import { OlympContext, isLoggedInContext, aboutOlympNameContext} from "./context/index.js";
import { usePersistentState } from "./hooks/usePersistentState.js";
import PreAboutOlympInfoPage from "./pages/preAboutOlympPage";

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

  // aboutOlympNameContext
  const [aboutOlympName, setAboutOlympName] = usePersistentState('aboutOlympName', '');

  const AboutOlympNameValue = {
    aboutOlympName, setAboutOlympName
  };

  return (
    <>
      <BrowserRouter>
        <OlympContext.Provider value={OlympContextValue}>
        <isLoggedInContext.Provider value={IsLoggedInValue}>
        <Routes>
          <Route path='/' element={
            <isLoggedInContext.Provider value={IsLoggedInValue}>
            <MainPage/>
            </isLoggedInContext.Provider>
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
          <Route path='/preAboutOlymp' element={
            <aboutOlympNameContext.Provider value={AboutOlympNameValue}>
              <PreAboutOlympInfoPage/>
            </aboutOlympNameContext.Provider>
          }/>
          <Route path='/aboutOlymp' element={
            <aboutOlympNameContext.Provider value={AboutOlympNameValue}>
              <AboutOlympPage/>
            </aboutOlympNameContext.Provider>
          }/>
        </Routes>
        </isLoggedInContext.Provider>
        </OlympContext.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;
