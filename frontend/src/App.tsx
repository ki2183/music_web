import React,{useContext,createContext,useState} from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './component/main/main';






function App() {

  return (
      <Routes> 
        <Route path="/" element={<Main/>}/>
        <Route path="/test" element={<Main/>}/>
      </Routes>
  );
}

export default App;