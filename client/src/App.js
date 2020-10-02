import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Main from './container/main';
import About from './components/about';
import Recipes from './container/recipes';
import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} /> 
        <Route exact path='/recipes' component={Recipes} />         
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
      user
  }
}

export default connect(mapStateToProps) (App)
