import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainHome } from './components/MainHome/MainHome';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import {MainPokedex} from "./components/MainPokedex/MainPokedex";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Switch>
          <Route exact path='/' render={()=>
            <MainHome/>
          }/>
          <Route exact path='/pokedex' render={MainPokedex}/>
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
