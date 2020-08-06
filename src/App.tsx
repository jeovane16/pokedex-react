import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainHome } from './components/MainHome/MainHome';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainHome/>
      <Footer/>
    </div>
  );
}

export default App;
