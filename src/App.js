import React, { useState, useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/mainPage"
import RegistrationPage from "./pages/registrationPage";
import LoginPage from "./pages/loginPage";

const App = () => {

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
