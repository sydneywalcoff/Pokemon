import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import PokeList from './components/PokeList';
import './App.css'

function App() {
  return (
    <>
      < Header />
      <Switch>
        <Route path='/:page'>
          < PokeList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
