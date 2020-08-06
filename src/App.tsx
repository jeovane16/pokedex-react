import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainHome } from './components/MainHome/MainHome';
import { MainConfirm } from "./components/MainConfirm/MainConfirm";
import man from './assets/man.png'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainHome/>
      <MainConfirm name='Asperoon' trainer={man}/>
      <Footer/>
    </div>
  );
}

export default App;
