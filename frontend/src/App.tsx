import React,{useContext,createContext,useState} from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './component/main/main';
import { Mode, darkmode, lightmode } from './interface/mode';
import { useMode } from './props/useMode';
import { Globalthis } from './style/globalStyle';

interface ContextProps{
  mode:Mode,
  toggleMode:()=>void
}

export const ModeContext = createContext<ContextProps>({
  mode:lightmode,
  toggleMode:()=>{
    return null
  }
})

function App() {
  const {mode,toggleMode} = useMode()

  return (
    <ModeContext.Provider value={{mode,toggleMode}}>
      <Globalthis mode={mode === lightmode ? lightmode:darkmode}/>
        <Routes> 
          <Route path="/" element={<Main/>}/>
          <Route path="/test" element={<Main/>}/>
        </Routes>
      </ModeContext.Provider>
  );
}

export default App;