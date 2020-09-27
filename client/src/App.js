import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import Main from './container/main';
import About from './components/about'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
