import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './app/Pages/home/index.jsx'
import Login from './app/Pages/login/index.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
