import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './container/main';
import About from './components/about';
import User from './container/user';
import { getUser } from './actions/userAction';
import Recipes from './container/recipes';
import {connect} from 'react-redux'

class App extends Component{

  componentWillMount() {
    this.props.getUser()
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} /> 
          <Route exact path='/recipes' component={Recipes} />
          <Route exact path='/user' component={User} />
        </BrowserRouter>
      </div>
    );
  }
}

  const mapStateToProps = ({ user }) => {
    return {
        user: user
    }
  }

export default connect(mapStateToProps, {getUser}) (App)
