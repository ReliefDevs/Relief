import React from 'react';
import { LanguageProvider } from './language'
import './App.css';
import NavBar from './components/navbar/NavBar';
import Info from './components/seccion/Info';


const App = () => {
  return (
    <LanguageProvider>
      <NavBar />
      <Info/>
    </LanguageProvider>
  );
};

export default App;
