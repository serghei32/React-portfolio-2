import React from 'react';
import './App.css';
import {Header} from "./layaout/header/Header";
import {Main} from "./layaout/section/main/Main";
import {Skills} from "./layaout/section/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Skills/>
      <Skills/>
    </div>
  );
}


export default App;



