import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
