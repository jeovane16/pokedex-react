import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainHome } from './components/MainHome/MainHome';

//          <Route exact path='/confirm' render={ConfirmWindow}/>
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Switch>
          <Route exact path='/' render={()=>
            <MainHome/>
          }/>
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
