import React from 'react';
import './App.css';
import {Header} from "./layaout/header/Header";
import {Main} from "./layaout/section/main/Main";
import {Skills} from "./layaout/section/skills/Skills";
import {Works} from "./layaout/section/works/Works";
import {Testimony} from "./layaout/section/testimony/Testimony";
import {Contact} from "./layaout/section/contact/Contact";
import {Slogan} from "./layaout/section/slogan/Slogan";
import {Footer} from "./layaout/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Testimony/>
      <Contact/>
      <Slogan/>
      <Footer/>
    </div>
  );
}

export default App;



