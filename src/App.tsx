import React from 'react';
import './App.css';
import {Header} from "./layaout/header/Header";
import {Main} from "./layaout/section/main/Main";
import {Skills} from "./layaout/section/skills/Skills";
import {Works} from "./layaout/section/works/Works";
import {Testimony} from "./layaout/section/testimony/Testimony";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Testimony/>

    </div>
  );
}

export default App;



